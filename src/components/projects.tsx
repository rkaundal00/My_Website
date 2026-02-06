"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "AI-Powered Code Reviewer",
    description:
      "An automated code review tool that uses large language models to analyze pull requests, detect potential bugs, and suggest improvements in real time.",
    tech: ["Python", "FastAPI", "OpenAI API", "React", "Docker"],
    repo: "https://github.com/rahulkaundal/code-reviewer",
    demo: "https://code-reviewer.demo.com",
  },
  {
    title: "Distributed Task Scheduler",
    description:
      "A fault-tolerant distributed task scheduling system built for high-throughput job processing with real-time monitoring and automatic retries.",
    tech: ["Go", "gRPC", "Redis", "PostgreSQL", "Kubernetes"],
    repo: "https://github.com/rahulkaundal/task-scheduler",
  },
  {
    title: "Real-Time Collaboration Editor",
    description:
      "A collaborative text editor supporting real-time multi-user editing with conflict resolution using CRDTs and operational transforms.",
    tech: ["TypeScript", "Next.js", "WebSockets", "Yjs", "Tailwind CSS"],
    repo: "https://github.com/rahulkaundal/collab-editor",
    demo: "https://collab-editor.demo.com",
  },
  {
    title: "ML Pipeline Framework",
    description:
      "A lightweight framework for building reproducible machine learning pipelines with experiment tracking, data versioning, and model registry.",
    tech: ["Python", "PyTorch", "MLflow", "DVC", "AWS S3"],
    repo: "https://github.com/rahulkaundal/ml-pipeline",
  },
];

export function Projects() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-4xl font-bold tracking-tight"
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-xl border border-neutral-200 p-6 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
            >
              <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
              <p className="mb-4 text-sm text-neutral-600 leading-relaxed dark:text-neutral-400">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    <Github size={16} />
                    Repo
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
