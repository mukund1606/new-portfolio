import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { LinksData } from "./LeftVerticalDiv";

export default function Footer() {
  return (
    <footer className="p-6 md:pb-8">
      <div className="block md:hidden">
        <ol className="flex items-center justify-center gap-2">
          {LinksData.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.title}
                className="group flex h-10 w-10 items-center justify-center"
              >
                <link.icon
                  className={cn(
                    "h-5 w-5 transition-all duration-300 ease-in-out group-hover:-translate-y-2",
                    link.isFill
                      ? "fill-light-slate group-hover:fill-green"
                      : "stroke-light-slate group-hover:stroke-green",
                  )}
                />
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-2 text-center text-sm text-slate">
        <p>
          Design inspired by{" "}
          <Link
            href="https://github.com/bchiang7/v4"
            target="_blank"
            rel="noreferrer"
            className="text-green"
          >
            Brittany Chiang&apos;s Portfolio v4
          </Link>
        </p>
        <p>
          Created using{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="text-green"
          >
            Next.js
          </Link>
          ,{" "}
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="text-green"
          >
            Tailwind CSS
          </Link>
          , and{" "}
          <Link
            href="https://www.framer.com/motion/"
            target="_blank"
            rel="noreferrer"
            className="text-green"
          >
            Framer Motion
          </Link>
          .
        </p>
        <p>
          Coded with ❤️ by{" "}
          <Link
            href="https://github.com/mukund1606"
            target="_blank"
            rel="noreferrer"
            className="text-green"
          >
            Mukund Mittal
          </Link>
        </p>
      </div>
    </footer>
  );
}
