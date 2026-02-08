"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Activity, Heart, Brain, Cloud } from "lucide-react";
import Image from "next/image";
import { type ReactNode } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  image: ReactNode;
}

const projects: Project[] = [
  {
    title: "Batch Application in Cloud",
    description:
      "Built an automated resource management system using Kubernetes, gCloud, Python, Docker, and Bash that dynamically schedules and allocates resources between latency-sensitive and batch workloads, ensuring SLO compliance while maximizing throughput and system stability.",
    tech: ["Python", "Bash", "Kubernetes", "Docker", "gCloud"],
    repo: "https://github.com/Bruol/cloud-computing-architecture-project",
    image: (
      // <div className="relative h-40 w-full">
      //   <Image
      //     src="/cloud_illustration.png"
      //     alt="Cloud computing illustration"
      //     fill
      //     className="object-cover"
      //   />
      // </div>
      <div className="flex h-40 items-center justify-center rounded-t-xl bg-red-100 dark:bg-red-950">
        <Cloud className="h-12 w-12 text-red-500 dark:text-red-400" />
      </div>
    ),
  },
  {
    title: "ICU Mortality Prediction",
    description:
      "Built and evaluated deep learning models (LSTM, BiLSTM, Transformer) on pre-processed ICU time-series data from PhysioNet for mortality prediction, using representation learning and visualization techniques (t-SNE, UMAP) for clinical interpretability.",
    tech: ["Pytorch", "Scikit-learn", "Matplotlib", "Pandas"],
    repo: "https://github.com/Thosam1/PhysioNet-ICU-Mortality-Prediction",
    image: (
      <div className="flex h-40 items-center justify-center rounded-t-xl bg-red-100 dark:bg-red-950">
        <Activity className="h-12 w-12 text-red-500 dark:text-red-400" />
      </div>
    ),
  },
  {
    title: "Heart Disease Prediction ",
    description:
      "Built and compared machine learning models (Logistic Regression, Random Forest, XGBoost, Neural Networks) on processed clinical data to predict heart disease risk, using SHAP values and evaluation metrics to improve accuracy and interpretability.",
    tech: ["Pytorch", "Scikit-learn", "Matplotlib", "SHAP"],
    repo: "https://github.com/afonsofsdomingues/heart-and-chest-xai",
    image: (
      <div className="flex h-40 items-center justify-center rounded-t-xl bg-pink-100 dark:bg-pink-950">
        <Heart className="h-12 w-12 text-pink-500 dark:text-pink-400" />
      </div>
    ),
  },
  {
    title: "LLM Ensembles for Robust Sentiment Classification",
    description:
      "Fine-tuned transformer-based LLMs (BERT, RoBERTa, DeBERTa v3, XLM-R) on a balanced 100K+ sentence dataset for ternary sentiment classification, using ensemble methods like softmax averaging and majority voting to boost robustness and performance.",
    tech: ["Pytorch", "Hugging Face", "Auto-sklearn", "Scikit-learn"],
    repo: "https://github.com/Thosam1/SentimentClassification",
    image: (
      <div className="flex h-40 items-center justify-center rounded-t-xl bg-purple-100 dark:bg-purple-950">
        <Brain className="h-12 w-12 text-purple-500 dark:text-purple-400" />
      </div>
    ),
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
              className="group overflow-hidden rounded-xl border border-neutral-200 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
            >
              {project.image}
              <div className="p-6">
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
