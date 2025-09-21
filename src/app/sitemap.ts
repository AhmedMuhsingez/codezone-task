import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://codezone-task.vercel.app/";

	// Static pages
	const staticPages = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "daily" as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: "daily" as const,
			priority: 0.8,
		},
	];

	// Dynamic blog pages
	const blogPosts = ["sample-blog-post-1", "sample-blog-post-2", "sample-blog-post-3"];

	const blogPages = blogPosts.map((slug) => ({
		url: `${baseUrl}/blog/${slug}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.6,
	}));

	return [...staticPages, ...blogPages];
}
