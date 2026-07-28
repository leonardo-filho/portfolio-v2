// src/components/About.tsx
"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full py-20 px-4 md:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 text-center text-4xl font-extrabold uppercase tracking-tighter md:text-5xl">
            About
          </h2>
          <div className="prose prose-invert prose-neutral max-w-none text-lg text-neutral-300">
            <p>
              I am a data professional with a <strong>Computer Engineering</strong> degree
              and an <strong>MBA in AI, Data Science and Big Data</strong>, with three years
              building and operating production data pipelines on{" "}
              <strong>Google Cloud Platform</strong>.
            </p>
            <p>
              Day to day my work is pipeline reliability: Python and BigQuery ingestion
              from ERP systems, REST APIs and Cloud Storage, idempotent loads,
              source-vs-target validation, and structured execution logging with freshness
              monitoring that turns silent failures into alerts. I care about grain,
              documentation and validating a number before anyone reports it.
            </p>
            <p>
              I am comfortable on both ends of the stack, from industrial sensor and
              time-series data to executive KPI dashboards. I built{" "}
              <strong>Quadra One</strong>, an executive analytics platform in Next.js and
              TypeScript on top of live BigQuery data, read directly by directors with no
              analyst in the room, and <strong>BillBot</strong>, a Python compliance auditing
              system that cross-checks financial records and notifies owners with traceable
              reports.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;