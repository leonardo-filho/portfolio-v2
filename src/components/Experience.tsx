// src/components/Experience.tsx
"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/resume";

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-black py-20 px-4 md:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-12 text-center text-4xl font-extrabold uppercase tracking-tighter md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-neutral-800 pl-6 md:pl-10">
          {experiences.map((job, index) => (
            <motion.article
              key={job.company}
              className="relative pb-12 last:pb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span
                aria-hidden
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-black bg-neutral-500 md:-left-[47px]"
              />

              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-xl font-bold text-white">
                  {job.role}
                  <span className="text-neutral-500"> · {job.company}</span>
                </h3>
                <p className="shrink-0 text-sm text-neutral-500">{job.period}</p>
              </div>
              <p className="mt-1 text-sm text-neutral-500">{job.location}</p>

              <ul className="mt-4 space-y-2 text-neutral-300">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
