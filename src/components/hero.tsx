"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/rkaundal00",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/rahulkaundal00",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:rahulkaundal00@hotmail.com",
    label: "Email",
  },
];

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium tracking-widest text-neutral-500 uppercase dark:text-neutral-400"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Hi, I&apos;m Rahul Kaundal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-lg text-neutral-600 dark:text-neutral-400"
        >
          CS Master&apos;s Student at ETH Zurich
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 text-neutral-500 dark:text-neutral-500"
        >
          Focused on Software Engineering with a passion for AI and building
          tools that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/projects"
            className="rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-neutral-300 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            Get in Touch
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <link.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
