"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-4xl font-bold tracking-tight"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex justify-start"
        >
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
            <Image
              src="/CV_Picture_Rahul.jpg"
              alt="Rahul Kaundal"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 text-neutral-600 leading-relaxed dark:text-neutral-400"
        >
          <p>
            My name is Rahul Kaundal and I am a Master&apos;s student in 
            Computer Science at ETH Zurich, specializing in Machine Learning 
            and Data Management Systems. I enjoy working on applied problems 
            at the intersection of data, algorithms, ML, 
            and I am particularly interested in building data-driven solutions.
          </p>
          <p>
            Through my studies and projects, I have gathered experience in 
            applying machine learning techniques ranging from classical models 
            to deep learning and transformer-based LLMs. To deepen my knowledge 
            I have further taken advanced courses exploring topics such as 
            probabilistic models, diffusion models and reinforcement learning.
          </p>
          <p>
            Previously, I worked as a Junior Software Engineer, where 
            I gained practical experience developing and maintaining production software 
            in a team environment. I learned how to work in a team, 
            communicate effectively and break down complex into simple ones.
          </p>
          <p>
            I am currently looking for internships or junior roles in data science, 
            machine learning, or AI engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
