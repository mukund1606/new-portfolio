"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  const initialDelay = 0.25;
  const nextDelay = 0.1;
  return (
    <section
      className="mx-auto flex min-h-[75vh] w-full max-w-[1000px] justify-center py-16 pt-20"
      id="projects"
    >
      <div className="my-auto flex w-full flex-col gap-6">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-base text-green">03.</span>
          <span className="text-lg font-semibold text-lightest-slate">
            Projects
          </span>
          <span className="ml-1 h-[2px] w-1/3 rounded-md bg-lightest-navy sm:ml-4 sm:w-1/2 lg:w-2/3" />
        </motion.div>
        <div className="flex flex-col gap-8 text-center">
          <motion.h2
            className="text-2xl font-semibold leading-tight text-lightest-slate"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: initialDelay + nextDelay }}
            viewport={{ once: true }}
          >
            Projects will be updated soon!
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
