"use client";

import { RiRobot3Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function RobotButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        window.location.href = "https://my-chatbot-kohl-psi.vercel.app";
      }}
      className="
        fixed
        bottom-6
        right-6
        z-[9999]
        bg-black/80
        text-white
        p-4
        animate-bounce 
        rounded-full
        shadow-lg
        hover:scale-110
        active:scale-95
        transition
      "
      aria-label="Open chatbot"
    >
      <RiRobot3Fill className="text-5xl" />
    </button>
  );
}
