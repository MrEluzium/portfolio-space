import { z } from "zod";

const nonEmptyString = z.string().trim().min(1, "Expected a non-empty string");

const projectLinkSchema = z.object({
  url: z.url("Expected a valid URL"),
  text: nonEmptyString,
  icon: nonEmptyString.optional(),
});

const experienceSchema = z.object({
  company: nonEmptyString,
  title: nonEmptyString,
  dates: nonEmptyString,
  description: nonEmptyString,
  tags: z.array(nonEmptyString).optional(),
});

const projectSchema = z.object({
  title: nonEmptyString,
  team: nonEmptyString,
  description: nonEmptyString,
  role: nonEmptyString.optional(),
  tags: z.array(nonEmptyString).optional(),
  links: z.array(projectLinkSchema).optional(),
});

const contactInfoSchema = z.object({
  email: z.email("Expected a valid email address"),
  telegram: z.object({
    username: nonEmptyString,
    url: z.url("Expected a valid Telegram URL"),
  }),
  linkedin: z.object({
    profileName: nonEmptyString,
    url: z.url("Expected a valid LinkedIn URL"),
  }),
});

export const portfolioDataSchema = z.object({
  heroTagline: nonEmptyString,
  contactInfo: contactInfoSchema,
  experiences: z.array(experienceSchema).min(1, "At least one experience is required"),
  projects: z.array(projectSchema).min(1, "At least one project is required"),
});

export type PortfolioData = z.infer<typeof portfolioDataSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Project = z.infer<typeof projectSchema>;
export type ProjectLink = z.infer<typeof projectLinkSchema>;
