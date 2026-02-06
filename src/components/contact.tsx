"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="mb-4 text-4xl font-bold tracking-tight">
          Get in Touch
        </h2>
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          I&apos;m always open to interesting conversations and opportunities.
          Feel free to reach out.
        </p>

        <a
          href="mailto:rahulkaundal00@hotmail.com"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          <Mail size={16} />
          rahulkaundal00@hotmail.com
        </a>
      </motion.div>
    </section>
  );
}
