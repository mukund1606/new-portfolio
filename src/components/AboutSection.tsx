"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import UnderlineAnimatedLink from "./UnderlineAnimatedLink";

export default function AboutSection() {
  const initialDelay = 0.25;
  const nextDelay = 0.1;
  return (
    <section
      className="mx-auto flex min-h-[75vh] w-full max-w-[1000px] justify-center py-16 pt-20"
      id="about"
    >
      <div className="my-auto flex w-full flex-col gap-6">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-base text-green">01.</span>
          <span className="text-lg font-semibold text-lightest-slate">
            About Me
          </span>
          <span className="ml-1 h-[2px] w-1/3 rounded-md bg-lightest-navy" />
        </motion.div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-4">
            <motion.p
              className="max-w-[540px] text-slate"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: initialDelay + nextDelay * 2,
              }}
              viewport={{ once: true }}
            >
              Hello! My name is Mukund, and I am a final-year student at{" "}
              <UnderlineAnimatedLink
                href="https://srmuniversity.ac.in/"
                target="_blank"
                rel="noreferrer"
              >
                SRM University, Delhi-NCR, Sonepat
              </UnderlineAnimatedLink>
              . My interest in web development began in my first year of
              college, and I have been working on it ever since. I enjoy
              tinkering with different web technologies.
            </motion.p>
            <motion.p
              className="max-w-[540px] text-slate"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: initialDelay + nextDelay * 3,
              }}
              viewport={{ once: true }}
            >
              Fast forward to today, I have learned a lot about web development
              and can now create fully responsive websites using{" "}
              <UnderlineAnimatedLink
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                Next.js
              </UnderlineAnimatedLink>{" "}
              and{" "}
              <UnderlineAnimatedLink
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind CSS
              </UnderlineAnimatedLink>
              . My main focus these days is on expanding my skills and learning
              new things every day.
            </motion.p>
            <motion.p
              className="max-w-[540px] text-slate"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: initialDelay + nextDelay * 4,
              }}
              viewport={{ once: true }}
            >
              Recently, I started learning about game development and have begun
              my journey into the world of game development with the{" "}
              <UnderlineAnimatedLink
                href="https://godotengine.org/"
                target="_blank"
                rel="noreferrer"
              >
                Godot Engine.
              </UnderlineAnimatedLink>
            </motion.p>
          </div>
          <motion.div
            id="image-div"
            className="flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: initialDelay + nextDelay * 4 }}
            viewport={{ once: true }}
          >
            <div className="group relative h-fit max-w-[300px] rounded-md">
              <div className="absolute inset-0 z-[1] hidden h-full w-full rounded-md bg-green/40 transition-all duration-500 group-hover:bg-transparent lg:block" />
              <Image
                src="/me.jpg"
                height={400}
                width={400}
                alt="Mukund Mittal"
                className="rounded-md transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"
              />
              <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-md border-2 border-green transition-all duration-500 group-hover:-bottom-3 group-hover:-right-3" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
