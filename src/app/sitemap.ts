import type { MetadataRoute } from "next";

// ✏️ Add your public routes below.
// For dynamic routes (blog posts, products), fetch from your API/DB and map them.
//
// Example dynamic sitemap:
//   const posts = await fetch(`${baseUrl}/api/posts`).then(r => r.json());
//   const postEntries = posts.map((post) => ({
//     url: `${baseUrl}/blog/${post.slug}`,
//     lastModified: post.updatedAt,
//   }));

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/register`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
