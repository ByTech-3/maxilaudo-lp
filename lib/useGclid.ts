"use client";
import { useEffect, useState } from "react";

export function useGclid() {
  const [gclid, setGclid] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const g = params.get("gclid") || params.get("gbraid");
    if (g) {
      setGclid(g);
      sessionStorage.setItem("gclid", g);
    } else {
      const stored = sessionStorage.getItem("gclid");
      if (stored) setGclid(stored);
    }
  }, []);

  return gclid;
}

export function buildWppUrl(msg: string, gclid: string | null) {
  const base = "https://wa.me/5541997426286";
  const text = gclid ? `${msg} [gclid:${gclid}]` : msg;
  return `${base}?text=${encodeURIComponent(text)}`;
}
