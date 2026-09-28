import { execFile } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const exec = promisify(execFile);
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const baseUrl = process.env.PORTFOLIO_BASE_URL || "http://localhost:3000";
const browser = process.env.CHROME_BIN || "google-chrome";
const documents = [
  ["/portfolio-download", "portfolio-leonardo-filho-pt.pdf"],
  ["/en/portfolio-download", "portfolio-leonardo-filho-en.pdf"],
];

for (const [route, filename] of documents) {
  const url = new URL(route, baseUrl).toString();
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url} returned ${response.status}. Start the site before generating PDFs.`);

  const profile = await mkdtemp(join(tmpdir(), "portfolio-pdf-"));
  const output = join(root, "public", filename);
  try {
    await exec(browser, [
      "--headless", "--no-sandbox", "--disable-gpu", "--no-first-run",
      `--user-data-dir=${profile}`,
      "--no-pdf-header-footer", "--virtual-time-budget=10000",
      `--print-to-pdf=${output}`, url,
    ]);
    process.stdout.write(`${output}\n`);
  } finally {
    await rm(profile, { recursive: true, force: true });
  }
}
