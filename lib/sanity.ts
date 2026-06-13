import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "bb5iffei",
  dataset: "content",
  apiVersion: "2025-06-08",
  useCdn: true,
});