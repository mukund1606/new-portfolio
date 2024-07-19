"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TechStack = [
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "JS", icon: "/icons/js.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "TypeScript", icon: "/icons/ts.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "PostgreSQL", icon: "/icons/postgres.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Postman", icon: "/icons/postman.svg" },
  { name: "Git", icon: "/icons/git.svg" },
];

export default function TechStackSection() {
  const initialDelay = 0.25;
  const nextDelay = 0.1;
  return (
    <section
      className="z-0 mx-auto flex h-screen w-full max-w-[800px]"
      id="tech-stack"
    >
      <div className="my-auto flex w-full flex-col gap-6">
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-base text-green">02.</span>
          <span className="text-lg font-semibold text-lightest-slate">
            My Tech Stack
          </span>
          <span className="ml-1 h-[2px] w-1/3 rounded-md bg-lightest-navy sm:ml-4 sm:w-1/2 lg:w-2/3" />
        </motion.div>
        <motion.div
          className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay }}
          viewport={{ once: true }}
        >
          {TechStack.map((tech, index) => (
            <motion.div
              className="flex flex-col items-center gap-1"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: initialDelay + nextDelay * (index + 1),
              }}
              viewport={{ once: true }}
            >
              <Image
                width={64}
                height={64}
                src={tech.icon}
                alt={tech.name}
                className="h-16 w-16 grayscale transition-all duration-500 hover:grayscale-0"
              />
              <span className="text-base font-medium text-lightest-slate">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
