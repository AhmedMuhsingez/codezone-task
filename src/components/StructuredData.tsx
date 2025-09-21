import Script from "next/script";

interface BlogPostStructuredDataProps {
	title: string;
	description: string;
	author: string;
	publishedDate: string;
	modifiedDate: string;
	tags: string[];
	slug: string;
	imageUrl?: string;
}

interface WebsiteStructuredDataProps {
	name: string;
	description: string;
	url: string;
}

export function BlogPostStructuredData({
	title,
	description,
	author,
	publishedDate,
	modifiedDate,
	tags,
	slug,
	imageUrl = "/blog-og-image.jpg",
}: BlogPostStructuredDataProps) {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: title,
		description: description,
		author: {
			"@type": "Person",
			name: author,
		},
		publisher: {
			"@type": "Organization",
			name: "Codezone",
			logo: {
				"@type": "ImageObject",
				url: "https://codezone-task.vercel.app/logo.png",
			},
		},
		datePublished: publishedDate,
		dateModified: modifiedDate,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `https://codezone-task.vercel.app/blog/${slug}`,
		},
		image: {
			"@type": "ImageObject",
			url: `https://codezone-task.vercel.app${imageUrl}`,
			width: 1200,
			height: 630,
		},
		keywords: tags.join(", "),
		articleSection: "Music",
		genre: "Turkish Rap",
		inLanguage: "tr-TR",
	};

	return (
		<Script
			id="blog-post-structured-data"
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData),
			}}
		/>
	);
}

export function WebsiteStructuredData({
	name,
	description,
	url,
}: WebsiteStructuredDataProps) {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: name,
		description: description,
		url: url,
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${url}/search?q={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
		publisher: {
			"@type": "Organization",
			name: "Codezone",
			logo: {
				"@type": "ImageObject",
				url: `${url}/logo.png`,
			},
		},
		sameAs: [
			"https://twitter.com/codezone",
			"https://instagram.com/codezone",
			"https://youtube.com/codezone",
		],
	};

	return (
		<Script
			id="website-structured-data"
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData),
			}}
		/>
	);
}

export function MusicWebsiteStructuredData() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Codezone - Turkish Rap Culture Platform",
		description: "Discover the latest in Turkish rap culture, trending music, and community content.",
		url: "https://codezone-task.vercel.app",
		genre: ["Hip Hop", "Rap", "Turkish Music"],
		inLanguage: "tr-TR",
		audience: {
			"@type": "Audience",
			audienceType: "Music Fans",
		},
		about: {
			"@type": "Thing",
			name: "Turkish Rap Culture",
		},
		publisher: {
			"@type": "Organization",
			name: "Codezone",
			logo: {
				"@type": "ImageObject",
				url: "https://codezone-task.vercel.app/logo.png",
			},
		},
	};

	return (
		<Script
			id="music-website-structured-data"
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData),
			}}
		/>
	);
}