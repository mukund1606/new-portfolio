"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedLink from "./AnimatedLink";

export default function HomeSection() {
  const initialDelay = 0.25;
  const nextDelay = 0.1;
  return (
    <section
      className="mx-auto flex h-screen w-full max-w-[1000px] pt-[80px]"
      id="home"
    >
      <div className="my-auto flex flex-col gap-6">
        <motion.span
          className="font-mono text-base text-green"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay }}
          viewport={{ once: true }}
        >
          Hi, my name is
        </motion.span>
        <div>
          <motion.h2
            className="text-3xl font-semibold leading-tight text-lightest-slate lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: initialDelay + nextDelay }}
            viewport={{ once: true }}
          >
            Mukund Mittal.
          </motion.h2>
          <motion.h3
            className="text-2xl font-semibold leading-tight text-light-slate lg:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: initialDelay + nextDelay * 2 }}
            viewport={{ once: true }}
          >
            I build things for the web.
          </motion.h3>
        </div>
        <motion.p
          className="max-w-[540px] text-slate"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay + nextDelay * 3 }}
          viewport={{ once: true }}
        >
          I&apos;m a full stack web developer and python developer who likes to
          build things for the web. I also love to learn new things and try them
          out. I&apos;m currently learning Game Development using{" "}
          <Link
            href="https://godotengine.org/"
            className="text-green"
            target="_blank"
            rel="noreferrer"
          >
            Godot Engine.
          </Link>
        </motion.p>
        <motion.div
          className="w-fit rounded-md bg-green"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay + nextDelay * 4 }}
          viewport={{ once: true }}
        >
          <AnimatedLink
            href="#projects"
            className="w-fit rounded-md"
            innerClassName="bg-navy rounded-md px-5 py-3.5 text-base"
          >
            Check out my work
          </AnimatedLink>
        </motion.div>
      </div>
    </section>
  );
}
