import { NextResponse } from "next/server";

// Exponential backoff retry utility
async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  let lastError: Error;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error: any) {
      lastError = error;

      // Check if it's a retryable error (429, 503, 500)
      const status = error.status || error.response?.status;
      const isRetryable = status === 429 || status === 503 || status === 500;

      if (!isRetryable || attempt === maxRetries) {
        throw error;
      }

      // Calculate exponential backoff delay
      const delay = baseDelay * Math.pow(2, attempt);
      console.log(
        `Retry attempt ${attempt + 1}/${maxRetries} after ${delay}ms`
      );
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw lastError!;
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    const botUrl = process.env.BOT_URL || "https://bot-oei9.onrender.com";
    console.log("Calling bot at:", `${botUrl}/api/chat`);
    console.log("Message:", message);

    // Wrap the fetch call with retry logic
    const data = await retryWithBackoff(
      async () => {
        const response = await fetch(`${botUrl}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
          signal: AbortSignal.timeout(60000),
        });

        console.log("Bot response status:", response.status);

        // Handle 429 rate limit specifically
        if (response.status === 429) {
          const retryAfter = response.headers.get("retry-after");
          const errorText = await response.text();
          console.error("Rate limit hit (429):", errorText);

          // Parse retry-after header if available
          if (retryAfter) {
            const retryMs = parseInt(retryAfter) * 1000;
            console.log(`Retry-After header suggests waiting ${retryMs}ms`);
          }

          const error: any = new Error("Rate limit exceeded");
          error.status = 429;
          throw error;
        }

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Bot error response:", errorText);

          const error: any = new Error("Bot server returned an error");
          error.status = response.status;
          throw error;
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text();
          console.error("Bot returned non-JSON:", text.substring(0, 500));

          const error: any = new Error("Bot server is starting up");
          error.status = 500;
          throw error;
        }

        return await response.json();
      },
      3,
      2000
    ); // 3 retries, 2s base delay

    console.log("Bot response:", data);
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Chat API error:", error);

    // Handle specific error types
    if (error.status === 429) {
      return NextResponse.json(
        {
          success: false,
          error:
            "API rate limit exceeded. The bot is experiencing high demand. Please try again in 30-60 seconds.",
        },
        { status: 429 }
      );
    }

    if (error.name === "TimeoutError") {
      return NextResponse.json(
        {
          success: false,
          error:
            "Bot server is waking up from sleep. Please try again in 30 seconds.",
        },
        { status: 504 }
      );
    }

    if (
      error.message?.includes("fetch failed") ||
      error.code === "ECONNREFUSED"
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Cannot connect to bot server. It may be starting up, please wait a moment.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message || "Unknown error occurred" },
      { status: 500 }
    );
  }
}
