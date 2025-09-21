import BlogContent from "@/components/sections/BlogContent";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import heart from "@/assets/blog/heart.png";
import comment from "@/assets/blog/comment.png";
import Link from "next/link";
import MoreContent from "@/components/sections/MoreContent";
import TrendsSection from "@/components/sections/TrendsSection";
import { Metadata } from "next";
import { BlogPostStructuredData } from "@/components/StructuredData";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	
	// In a real application, you would fetch the blog post data here
	// For now, we'll use static data based on the slug
	const title = "Lorem Ipsum Dolor Sit Amet Consectetur Edipicing Sir Elit";
	const description = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.";
	const publishedTime = "2025-01-21T10:00:00.000Z";
	const modifiedTime = "2025-01-21T10:00:00.000Z";
	const tags = ["Rap", "Lorem", "Dictum et", "Aenean"];
	
	return {
		title,
		description,
		keywords: tags.join(", "),
		authors: [{ name: "Ahmed Muhsingez" }],
		openGraph: {
			title,
			description,
			type: "article",
			publishedTime,
			modifiedTime,
			authors: ["Ahmed Muhsingez"],
			tags,
			images: [
				{
					url: "/blog-og-image.jpg",
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ["/blog-og-image.jpg"],
		},
		alternates: {
			canonical: `/blog/${slug}`,
		},
	};
}

export default async function page({ params }: Props) {
	const { slug } = await params;

	const BREADCRUMB_DATA = [
		{ name: "ANA SAYFA", href: "/" },
		{ name: "Blog", href: "/blog" },
		{ name: "LOREM IPSUM  ...  AMET" },
	];

	// Blog post data for structured data
	const title = "Lorem Ipsum Dolor Sit Amet Consectetur Edipicing Sir Elit";
	const description = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.";
	const publishedTime = "2025-01-21T10:00:00.000Z";
	const modifiedTime = "2025-01-21T10:00:00.000Z";
	const tags = ["Rap", "Lorem", "Dictum et", "Aenean"];

	return (
		<>
			<BlogPostStructuredData
				title={title}
				description={description}
				author="Ahmed Muhsingez"
				publishedDate={publishedTime}
				modifiedDate={modifiedTime}
				tags={tags}
				slug={slug}
			/>
			<div className="p-6 lg:p-20 flex flex-col gap-10">
			<nav aria-label="Breadcrumb" className="font-main">
				<ol className="flex gap-3 text-[14px]">
					{BREADCRUMB_DATA.map((item, idx) => {
						const isLastItem = idx === BREADCRUMB_DATA.length - 1;
						return (
							<li key={idx} className="flex items-center gap-2">
								{item.href ? (
									<Link href={item.href}>{item.name.toUpperCase()}</Link>
								) : (
									<span>{item.name.toUpperCase()}</span>
								)}
								{!isLastItem && (
									<span className="icon-[weui--arrow-outlined] text-xl" />
								)}
							</li>
						);
					})}
				</ol>
			</nav>

			<div className="flex flex-col lg:flex-row justify-between gap-20 lg:gap-32 xl:gap-40">
				<div className="lg:max-w-[50%] flex flex-col gap-10">
					<div className="flex gap-4">
						<span className="icon-[iconamoon--eye-bold] text-2xl"></span>
						<span className="font-main">12.094</span>
					</div>

					<BlogContent />

					<div className="flex gap-6 font-main pt-10">
						<div className="flex gap-2">
							<Image src={heart} alt="heart" className="cursor-pointer" />
							<div className="flex gap-1">
								<span className="font-bold">14 Kişi</span>
								<span>Beğendi</span>
							</div>
						</div>

						<div className="flex gap-2">
							<Image src={comment} alt="heart" className="cursor-pointer" />
							<div className="flex gap-2">
								<span className="font-bold">3</span>
							</div>
						</div>
					</div>

					<MoreContent />

					<TrendsSection customCard amountOfItems={4} customTitleStyle="text-[60px]" />
				</div>

				<div className="pt-20 lg:pt-0">
					<Footer isOnSide />
				</div>
			</div>
		</div>
		</>
	);
}
