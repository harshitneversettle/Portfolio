"use client";

import { useEffect } from "react";

export default function ZoomWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const applyZoom = () => {
      const zoom = Math.round(window.devicePixelRatio * 100);

      if (zoom <= 100 ) {
        document.body.classList.add("zoom-wrapper");
      } else {
        document.body.classList.remove("zoom-wrapper");
      }
    };

    applyZoom();
    window.addEventListener("resize", applyZoom); 
    return () => window.removeEventListener("resize", applyZoom);
  }, []);

  return <>{children}</>;
}
