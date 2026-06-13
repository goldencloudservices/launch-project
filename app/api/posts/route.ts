import { client } from "@/lib/sanity";

export async function GET() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      excerpt,
      "slug": slug.current
    }
  `);

  return Response.json({ posts });
}