"use client";
import { useEffect, useRef, useState } from "react";

export function useSmartHeader() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const diff = y - lastY.current;

      setScrolled(y > 80);

      if (y < 80) {
        setVisible(true);
        lastY.current = y;
        return;
      }

      if (Math.abs(diff) < 8) return;

      setVisible(diff < 0);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { visible, scrolled };
}
