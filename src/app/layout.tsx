import type { Metadata } from "next";
import { Saira, Saira_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SizeIndicator from "@/components/dev/SizeIndicator";
import { WebsiteStructuredData, MusicWebsiteStructuredData } from "@/components/StructuredData";

const saira = Saira({
	variable: "--font-saira",
	subsets: ["latin"],
});

const sairaCondensed = Saira_Condensed({
	variable: "--font-saira-condensed",
	subsets: ["latin"],
	weight: "700",
});

export const metadata: Metadata = {
	title: {
		default: "Codezone - Turkish Rap Culture & Music Platform",
		template: "%s | Codezone",
	},
	description:
		"Discover the latest in Turkish rap culture, trending music, and community content. Explore monthly favorites, discover new artists, and stay connected with the rap community.",
	keywords: [
		"Turkish rap",
		"rap culture",
		"music platform",
		"trending music",
		"rap community",
		"hip hop",
		"music discovery",
	],
	authors: [{ name: "Ahmed Muhsingez" }],
	creator: "Ahmed Muhsingez",
	publisher: "Codezone",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://codezone-task.vercel.app"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "tr_TR",
		url: "https://codezone-task.vercel.app",
		title: "Codezone - Turkish Rap Culture & Music Platform",
		description:
			"Discover the latest in Turkish rap culture, trending music, and community content. Explore monthly favorites, discover new artists, and stay connected with the rap community.",
		siteName: "Codezone",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Codezone - Turkish Rap Culture Platform",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Codezone - Turkish Rap Culture & Music Platform",
		description:
			"Discover the latest in Turkish rap culture, trending music, and community content.",
		images: ["/og-image.jpg"],
		creator: "@codezone",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="tr">
			<body className={`${saira.variable} ${sairaCondensed.variable} antialiased`}>
				<WebsiteStructuredData
					name="Codezone - Turkish Rap Culture Platform"
					description="Discover the latest in Turkish rap culture, trending music, and community content."
					url="https://codezone-task.vercel.app"
				/>
				<MusicWebsiteStructuredData />
				<SizeIndicator />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
