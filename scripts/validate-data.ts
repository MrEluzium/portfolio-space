import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { parsePortfolioData } from "../src/data/loadPortfolioData";

const dataFilePath = resolve(process.cwd(), "src/data/portfolioData.yaml");

async function main() {
  try {
    const rawData = await readFile(dataFilePath, "utf-8");
    const portfolioData = parsePortfolioData(rawData);

    console.log(
      `portfolioData.yaml is valid (${portfolioData.experiences.length} experiences, ${portfolioData.projects.length} projects).`,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(message);
    process.exit(1);
  }
}

await main();
