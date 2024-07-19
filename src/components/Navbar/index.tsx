"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AnimatedLink from "../AnimatedLink";
import Logo from "../Logo";

const NavData = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Tech Stack",
    href: "#tech-stack",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [selected, setSelected] = useState<string>(window?.location?.hash);
  const [isHidden, setIsHidden] = useState(false);
  const [isStart, setIsStart] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", () => {
    if (scrollYProgress.getVelocity() > 0.6) {
      setIsHidden(true);
    } else if (scrollYProgress.getVelocity() < -0.25) {
      setIsHidden(false);
    }
    if (scrollYProgress.get() === 0) {
      setIsStart(true);
    } else {
      setIsStart(false);
    }
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileNavOpen) {
        if (event.target instanceof HTMLElement) {
          if (!event.target.closest("#mobile-nav")) {
            setIsMobileNavOpen(false);
          }
        }
      }
    };
    // Add event listener to close mobile nav on click outside
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    if (isMobileNavOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  }, [isMobileNavOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "0") {
        window.location.href = "#home";
        setSelected("/");
        event.preventDefault();
      } else if (event.key === "1") {
        window.location.href = "#about";
        setSelected("#about");
        event.preventDefault();
      } else if (event.key === "2") {
        event.preventDefault();
        setSelected("#tech-stack");
        window.location.href = "#tech-stack";
      } else if (event.key === "3") {
        event.preventDefault();
        setSelected("#projects");
        window.location.href = "#projects";
      } else if (event.key === "4") {
        event.preventDefault();
        setSelected("#contact");
        window.location.href = "#contact";
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 flex w-full items-center bg-navy/85 px-6 shadow-sm backdrop-blur-sm transition-all duration-500 ease-in-out md:px-10 lg:px-24",
        !isStart && "shadow-md",
        isMobileNavOpen && "bg-transparent shadow-none",
      )}
      initial={{
        y: isHidden ? -100 : 0,
        height: isStart ? "100px" : "70px",
      }}
      animate={{
        y: isHidden ? -100 : 0,
        height: isStart ? "100px" : "70px",
      }}
      transition={{
        duration: 0.2,
        ease: "easeIn",
      }}
    >
      <nav className="flex w-full items-center justify-between">
        <Logo href="#home" onClick={() => setSelected("/")} />
        {/* Mobile Nav */}
        <div
          className={cn(
            "absolute right-6 top-4 z-50 md:hidden",
            isStart && "top-8",
          )}
        >
          <MobileNavButton
            isMobileNavOpen={isMobileNavOpen}
            setIsMobileNavOpen={setIsMobileNavOpen}
          />
        </div>
        {/* Desktop Nav */}
        <div className="hidden gap-x-8 font-mono text-[13px] text-lightest-slate md:flex">
          <ol className="flex items-center gap-x-8">
            {NavData.map((item, index) => {
              return (
                <li
                  className="transition-all duration-300 ease-in-out data-[state=active]:text-green hover:text-green"
                  key={item.title}
                  data-state={item.href === selected ? "active" : "inactive"}
                  onClick={() => {
                    setSelected(item.href);
                  }}
                >
                  <Link href={item.href}>
                    <span className="pr-1 text-green">
                      {(index + 1).toString().padStart(2, "0")}.
                    </span>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ol>
          <AnimatedLink href="/resume.pdf">Resume</AnimatedLink>
        </div>
      </nav>
      <motion.div
        className="fixed right-0 w-full backdrop-blur-sm"
        style={{
          top: isStart ? "100px" : "70px",
          height: isStart ? "calc(100vh - 100px)" : "calc(100vh - 70px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileNavOpen ? 1 : 0 }}
        transition={{
          duration: 0.2,
          ease: "easeIn",
        }}
      />
      {/*  Start Animation from the right */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.aside
            id="mobile-nav"
            className="fixed right-0 top-0 flex h-screen w-[min(75vw,400px)] items-center justify-center bg-light-navy text-green md:hidden"
            initial={{ right: "-100vw" }}
            animate={{
              right: 0,
            }}
            exit={{
              right: "-100vw",
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <div className="flex flex-col items-center gap-y-12 font-mono text-[13px] text-lightest-slate">
              <ol className="flex w-fit flex-col items-center gap-y-8">
                {NavData.map((item, index) => {
                  return (
                    <li
                      className="text-center text-base transition-all duration-300 ease-in-out data-[state=active]:text-green hover:text-green"
                      key={item.title}
                      data-state={
                        item.href === selected ? "active" : "inactive"
                      }
                      onClick={() => {
                        setSelected(item.href);
                      }}
                    >
                      <Link href={item.href}>
                        <span className="text-green">
                          {(index + 1).toString().padStart(2, "0")}.
                        </span>
                        <br />
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ol>
              <AnimatedLink
                href="/resume.pdf"
                className="w-fi rounded-md"
                innerClassName="bg-light-navy rounded-md px-10 py-4 text-base"
              >
                Resume
              </AnimatedLink>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function MobileNavButton({
  isMobileNavOpen,
  setIsMobileNavOpen,
}: {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (isMobileNavOpen: boolean) => void;
}) {
  return (
    <button
      id="mobile-nav-button"
      className={cn(
        "z-50 flex cursor-pointer flex-col items-end gap-2 rounded-md bg-transparent p-2 text-green transition-all duration-100",
      )}
      onClick={() => {
        setIsMobileNavOpen(!isMobileNavOpen);
      }}
    >
      <motion.span
        className="h-[2px] w-9 rounded-md bg-green"
        initial={{ y: 0 }}
        animate={{
          y: isMobileNavOpen ? 10 : 0,
          rotate: isMobileNavOpen ? "-45deg" : 0,
        }}
        transition={{
          bounce: 0,
          duration: 0.2,
        }}
      ></motion.span>
      <motion.span
        className="h-[2px] rounded-md bg-green"
        initial={{ width: "28px" }}
        animate={{
          rotate: isMobileNavOpen ? "45deg" : 0,
          width: isMobileNavOpen ? "36px" : "28px",
        }}
        transition={{
          bounce: 0,
          duration: 0.2,
        }}
      ></motion.span>
      <motion.span
        className="h-[2px] w-5 rounded-md bg-green"
        initial={{ y: 0 }}
        animate={{
          x: isMobileNavOpen ? -2 : 0,
          y: isMobileNavOpen ? -3.5 : 0,
          rotate: isMobileNavOpen ? "45deg" : 0,
        }}
        transition={{
          bounce: 0,
          duration: 0.2,
        }}
      ></motion.span>
    </button>
  );
}
