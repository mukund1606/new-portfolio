"use client";

import { useEffect } from "react";

export default function NavbarKeyboardEvent() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "0") {
        window.location.href = "#home";
        event.preventDefault();
      } else if (event.key === "1") {
        window.location.href = "#about";
        event.preventDefault();
      } else if (event.key === "2") {
        event.preventDefault();
        window.location.href = "#tech-stack";
      } else if (event.key === "3") {
        event.preventDefault();
        window.location.href = "#projects";
      } else if (event.key === "4") {
        event.preventDefault();
        window.location.href = "#contact";
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return null;
}
