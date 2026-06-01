"use client";
import { motion, AnimatePresence } from "framer-motion";
import { WppIcon } from "./WppIcon";
import { useSmartHeader } from "@/lib/useSmartHeader";

export function WppFloat() {
  const { visible } = useSmartHeader();
  const expanded = !visible;

  return (
    <motion.a
      href="https://wa.me/554191446917"
      aria-label="Falar no WhatsApp"
      layout
      className="wa-float-ring fixed right-5 bottom-5 z-[80] rounded-full bg-verde-wpp text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.45)] no-underline overflow-hidden"
      animate={{ scale: expanded ? 1.1 : 1 }}
      style={{
        height: 60,
        minWidth: 60,
        gap: 8,
        paddingLeft: expanded ? 16 : 15,
        paddingRight: expanded ? 16 : 15,
      }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <WppIcon className="w-[30px] h-[30px] relative z-[1] flex-shrink-0" />
      <AnimatePresence>
        {expanded && (
          <motion.span
            key="wpp-label"
            className="sm:hidden font-bold text-sm whitespace-nowrap"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
          >
            Falar agora
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
