// src/components/Credentials.tsx
"use client";

import { motion } from "framer-motion";
import {
  certificationGroups,
  certifications,
  education,
  languages,
  skillGroups,
  type Certification,
} from "@/data/resume";

const groupOrder: Certification["group"][] = ["cloud", "analytics"];

const Credentials = () => {
  return (
    <section id="credentials" className="w-full bg-neutral-950 py-20 px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="mb-12 text-center text-4xl font-extrabold uppercase tracking-tighter md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Education &amp; Certifications
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-500">
              Education
            </h3>
            <ul className="space-y-4">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="rounded-xl border border-neutral-800 bg-black p-5"
                >
                  <p className="font-semibold text-white">{item.degree}</p>
                  <p className="mt-1 text-sm text-neutral-400">{item.school}</p>
                  <p className="mt-1 text-sm text-neutral-500">{item.period}</p>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-widest text-neutral-500">
              Languages
            </h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.name} className="flex flex-wrap justify-between gap-2 text-neutral-300">
                  <span>{lang.name}</span>
                  <span className="text-sm text-neutral-500">{lang.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-500">
              Certifications
            </h3>
            {groupOrder.map((group) => (
              <div key={group} className="mb-6 last:mb-0">
                <p className="mb-3 text-xs uppercase tracking-widest text-neutral-600">
                  {certificationGroups[group]}
                </p>
                <ul className="space-y-3">
                  {certifications
                    .filter((cert) => cert.group === group)
                    .map((cert) => (
                      <li
                        key={cert.name}
                        className="rounded-xl border border-neutral-800 bg-black p-4"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <p className="font-medium text-white">{cert.name}</p>
                          <span className="text-sm text-neutral-500">{cert.year}</span>
                        </div>
                        <p className="mt-1 text-sm text-neutral-400">
                          {cert.issuer}
                          {cert.credentialId ? (
                            <span className="text-neutral-600"> · ID {cert.credentialId}</span>
                          ) : null}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-500">
            Technical skills
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 font-medium text-white">{group.label}</p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-neutral-800 bg-black px-3 py-1 text-xs text-neutral-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Credentials;
