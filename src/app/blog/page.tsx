import Breadcrumb from "@/components/Breadcrumb";
import bgWord from "@/assets/blog/bg-word.svg";
import Image from "next/image";
import lowerShapeLeft from "@/assets/blog/lower-shape-left.png";
import lowerShapeRight from "@/assets/blog/lower-shape-right.png";
import { PostsResponse } from "@/types/types";
import BlogSwiper from "@/components/sections/BlogSwiper";
import DiscoverSection from "@/components/sections/DiscoverSection";
type Props = {};

async function page({}: Props) {
	const res = await fetch("https://dummyjson.com/c/a7c4-016a-47aa-8241", {
		next: { revalidate: 60 },
	});
	const data: PostsResponse = await res.json();
	return (
		<>
			<div className="relative lg:p-20 p-4 bg-[url('/bg-effect.png')] w-dvw bg-[#F0E74D] text-black font-main pointer-events-auto">
				<Image src={bgWord} alt="bg-word" className="absolute top-0 right-0 " />

				<Breadcrumb items={[{ name: "ANA SAYFA", href: "/" }, { name: "BLOG" }]} />

				<span className="font-condensed font-bold hidden lg:block lg:text-[60px] py-4">
					BLOG
				</span>

				<BlogSwiper data={data} />

				<Image
					src={lowerShapeLeft}
					alt="lower-shape-left"
					className="absolute min-w-full bottom-0 left-0 pointer-events-none"
				/>
				<Image
					src={lowerShapeRight}
					alt="lower-shape-right"
					className="absolute min-w-full bottom-0 right-0 pointer-events-none"
				/>
			</div>

			<DiscoverSection posts={data} />
		</>
	);
}

export default page;
