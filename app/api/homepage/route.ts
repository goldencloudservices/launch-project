import { client } from "@/lib/sanity";

export async function GET() {
  const data = await client.fetch(`{
    "stories": *[_type == "post"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      excerpt,
      "slug": slug.current,
      "mainImageUrl": mainImage.asset->url
    },
    "videos": *[_type == "video"][0...3] {
      _id,
      title,
      youtubeUrl,
      description,
      "thumbnailUrl": thumbnail.asset->url
    },
    "galleries": *[_type == "photoGallery"][0...3] {
      _id,
      title,
      description,
      "firstPhotoUrl": photos[0].asset->url
    },
    "partners": *[_type == "partner"][0...3] {
      _id,
      name,
      website,
      description,
      "logoUrl": logo.asset->url
    },
    "metrics": *[_type == "impactMetric"][0...4] {
      _id,
      label,
      value
    }
  }`);

  return Response.json(data);
}