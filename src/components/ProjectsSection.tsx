"use client";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";

import { type ProjectDataType, projectsData } from "@/data/projectsData";
import GithubLogo from "./Logos/Github";

export default function ProjectsSection() {
  const initialDelay = 0.25;
  const nextDelay = 0.1;
  const totalProjects = projectsData.length;
  const feturedProjects = projectsData.filter((project) => project.isFeatured);
  const totalFeturedProjects = feturedProjects.length;
  const nonFeaturedProjects = projectsData.filter(
    (project) => !project.isFeatured,
  );
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
          <div className="flex min-w-fit items-center gap-2">
            <span className="font-mono text-base text-green">03.</span>
            <span className="text-lg font-semibold text-lightest-slate">
              Some Things I&apos;ve Built
            </span>
          </div>
          <span className="mx-1 h-[2px] w-full rounded-md bg-lightest-navy sm:mx-4" />
        </motion.div>
        <div className="flex flex-col gap-8 text-center">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {feturedProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: initialDelay + nextDelay * (index + 1),
                }}
                viewport={{ once: true }}
              >
                <ProjectCard data={project} />
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {nonFeaturedProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay:
                    initialDelay +
                    nextDelay * (index + 1 + totalFeturedProjects),
                }}
                viewport={{ once: true }}
              >
                <ProjectCard data={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// function FeaturedProjectCard(data: ProjectDataType & { isReverse: boolean }) {
//   return <></>;
// }

function ProjectCard({ data }: { data: ProjectDataType }) {
  return (
    <div className="group relative flex h-full w-full cursor-pointer flex-col justify-between gap-8 rounded-md bg-light-navy px-7 py-8 text-left shadow-sm shadow-navy-shadow transition-all duration-500 hover:-translate-y-2">
      <header className="flex flex-col gap-2">
        <div className="mb-9 flex justify-between">
          <Folder className="h-10 w-10 text-green" />
          {data.link &&
            (data.link.includes("github") ? (
              <a href={data.link} target="_blank" rel="noreferrer">
                <GithubLogo className="h-6 w-6 text-light-slate transition-all duration-300 hover:text-green" />
              </a>
            ) : (
              <a href={data.link} target="_blank" rel="noreferrer">
                <ExternalLink className="h-6 w-6 text-light-slate transition-all duration-300 hover:text-green" />
              </a>
            ))}
        </div>
        <h2 className="mb-2 text-base font-bold text-lightest-slate transition-all duration-300 group-hover:text-green">
          {data.title}
        </h2>
        <div className="group/desc">
          <p className="text-sm text-light-slate">
            {data.description.length > 150
              ? data.description.slice(0, 150) + "..."
              : data.description}
          </p>
          {/* Description Card */}
          {data.description.length > 150 && (
            <div className="absolute left-0 right-0 top-0 min-h-full origin-top scale-y-0 rounded-md bg-light-navy px-7 py-8 text-left shadow-sm shadow-navy-shadow transition-all duration-500 group-hover/desc:scale-y-100">
              <p className="text-sm text-light-slate">{data.description}</p>
            </div>
          )}
        </div>
      </header>
      <footer className="mt-auto">
        <ul className="flex flex-wrap gap-x-6 font-mono text-sm text-slate">
          {data.techStack.map((tech, index) => (
            <li key={`${data.title}-tech-${index}`}>{tech}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
