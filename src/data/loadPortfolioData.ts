import YAML from "yaml";
import type { ZodError } from "zod";

import { portfolioDataSchema, type PortfolioData } from "./portfolioSchema";

function formatValidationError(error: ZodError): string {
  return error.issues
    .map((issue) => {
      const path = issue.path.length > 0 ? issue.path.join(".") : "(root)";
      return `- ${path}: ${issue.message}`;
    })
    .join("\n");
}

export function parsePortfolioData(rawPortfolioData: string): PortfolioData {
  let parsedYaml: unknown;

  try {
    parsedYaml = YAML.parse(rawPortfolioData);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to parse src/data/portfolioData.yaml:\n- ${message}`);
  }

  const validationResult = portfolioDataSchema.safeParse(parsedYaml);
  if (!validationResult.success) {
    throw new Error(
      `Invalid src/data/portfolioData.yaml:\n${formatValidationError(validationResult.error)}`,
    );
  }

  return validationResult.data;
}
