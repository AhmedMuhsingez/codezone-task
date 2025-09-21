import Breadcrumb from "@/components/Breadcrumb";
import bgWord from "@/assets/blog/bg-word.svg";
import Image from "next/image";
import lowerShapeLeft from "@/assets/blog/lower-shape-left.png";
import lowerShapeRight from "@/assets/blog/lower-shape-right.png";
import { PostsResponse } from "@/types/types";
import BlogSwiper from "@/components/sections/BlogSwiper";
import DiscoverSection from "@/components/sections/DiscoverSection";
import Footer from "@/components/sections/Footer";
import ClipsSection from "@/components/sections/ClipsSection";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
	title: "Blog - Turkish Rap Culture & Music",
	description:
		"Explore the latest blog posts about Turkish rap culture, music trends, and community insights. Stay updated with the newest content from the rap community.",
	keywords: [
		"blog",
		"Turkish rap",
		"rap culture",
		"music blog",
		"hip hop blog",
		"rap community",
	],
	openGraph: {
		title: "Blog - Turkish Rap Culture & Music",
		description:
			"Explore the latest blog posts about Turkish rap culture, music trends, and community insights.",
		type: "website",
		images: [
			{
				url: "/blog-og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Codezone Blog - Turkish Rap Culture",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Blog - Turkish Rap Culture & Music",
		description:
			"Explore the latest blog posts about Turkish rap culture, music trends, and community insights.",
		images: ["/blog-og-image.jpg"],
	},
	alternates: {
		canonical: "/blog",
	},
};

async function page({}: Props) {
	const res = await fetch("https://dummyjson.com/c/a7c4-016a-47aa-8241", {
		next: { revalidate: 60 },
	});
	const data: PostsResponse = await res.json();

	return (
		<>
			<div className="relative lg:p-20 lg:pb-10 p-4 bg-[url('/bg-effect.png')] w-dvw bg-[#F0E74D] text-black font-main pointer-events-auto">
				<Image
					src={bgWord}
					alt="bg-word"
					className="hidden xl:block absolute top-0 right-0 "
				/>

				<Breadcrumb items={[{ name: "ANA SAYFA", href: "/" }, { name: "BLOG" }]} />

				<span className="font-condensed font-bold hidden lg:block lg:text-[60px] py-4">
					BLOG
				</span>

				<BlogSwiper data={data} />

				<Image
					src={lowerShapeLeft}
					alt="lower-shape-left"
					className="absolute 2xl:min-w-full -bottom-1 -left-1/2 translate-x-1/2 lg:bottom-0 lg:translate-x-0 lg:left-0 pointer-events-none"
				/>
				<Image
					src={lowerShapeRight}
					alt="lower-shape-right"
					className="absolute 2xl:min-w-full 2xl:-bottom-10 bottom-0 right-0 pointer-events-none hidden lg:block"
				/>
			</div>

			<DiscoverSection posts={data} />

			<ClipsSection />

			<Footer />
		</>
	);
}

export default page;
