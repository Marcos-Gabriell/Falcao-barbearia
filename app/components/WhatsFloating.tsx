"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { WHATSAPP_LINK } from "../utils/links";

export default function WhatsFloating() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 180);
    }
    window.addEventListener("scroll", handleScroll);
    const t = setTimeout(() => setPulse(true), 3000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar pelo WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366]"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.92 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-[#25d366]"
            animate={pulse ? { scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-[#25d366]"
            animate={pulse ? { scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
          />
          <motion.div
            animate={{ boxShadow: ["0 0 20px rgba(37,211,102,0.5)", "0 0 40px rgba(37,211,102,0.8)", "0 0 20px rgba(37,211,102,0.5)"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
          />
          <svg
            width="30"
            height="30"
            viewBox="0 0 256 258"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            className="relative z-10 drop-shadow-[0_0_6px_rgba(0,0,0,0.4)]"
          >
            <path d="M128.1 0C57.3 0 .7 56.5.7 126.3c0 22.1 5.8 43.7 16.8 62.7L0 256l69.9-17.9c18.3 10 39 15.3 60.3 15.3h.1c70.8 0 127.4-56.5 127.4-126.3C257.7 56.5 199 0 128.1 0zm75.2 180.4c-3.2 9-18.4 17.2-25.3 18.3-6.5 1-14.8 1.4-23.9-1.5-5.5-1.8-12.6-4.1-21.7-8.1-38.1-16.6-62.8-55.3-64.8-57.9-1.9-2.6-15.4-20.5-15.4-39.1 0-18.6 9.7-27.7 13.1-31.5 3.3-3.8 7.2-4.7 9.6-4.7 2.4 0 4.8 0 6.8.1 2.2.1 5.1-.8 8 6.1 3.2 7.5 10.8 26.2 11.7 28.1.9 1.9 1.5 4.1.3 6.6-1.2 2.6-1.8 4.1-3.5 6.3-1.8 2.1-3.8 4.7-5.3 6.3-1.8 1.9-3.7 3.9-1.6 7.4 2.1 3.6 9.3 15.4 20 24.8 13.8 12.4 24.9 16.3 28.4 18.1 3.5 1.9 5.5 1.6 7.5-.9 2.1-2.6 8.7-10.1 11-13.6 2.3-3.4 4.6-2.9 7.6-1.7 3.2 1.3 20.4 9.8 23.9 11.6 3.5 1.9 5.8 2.8 6.6 4.4.8 1.6.8 9.3-2.4 18.3z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}