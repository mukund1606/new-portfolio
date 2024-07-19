import React from "react";

import { cn } from "@/lib/utils";
import Link, { type LinkProps } from "next/link";

type AnimatedLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

export default function AnimatedLink({
  children,
  className,
  innerClassName,
  ...props
}: AnimatedLinkProps) {
  return (
    <Link
      className={cn("cursor-pointer rounded-md bg-green text-green", className)}
      {...props}
    >
      <div
        className={cn(
          "rounded-md border border-green bg-dark-navy px-3 py-2 transition-all duration-500 hover:-translate-x-1 hover:-translate-y-1",
          innerClassName,
        )}
      >
        {children}
      </div>
    </Link>
  );
}
