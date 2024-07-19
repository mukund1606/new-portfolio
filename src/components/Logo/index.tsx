import Link, { type LinkProps } from "next/link";

import { cn } from "@/lib/utils";
import React from "react";
import M from "./M";
type AnimatedLinkProps = LinkProps & {
  className?: string;
};
export default function Logo({ className, ...props }: AnimatedLinkProps) {
  return (
    <Link
      className={cn("cursor-pointer rounded-md bg-green", className)}
      {...props}
    >
      <div className="rounded-md border-2 border-green bg-dark-navy p-3 transition-all duration-500 hover:-translate-x-1 hover:-translate-y-1">
        <M fill="#64ffda" className="h-5 w-5" />
      </div>
    </Link>
  );
}
