"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/blog-swiper.css";

import { PostsResponse } from "@/types/types";
import { useState } from "react";
import Image from "next/image";
import playButton from "@/assets/blog/play-button.png";
import Link from "next/link";

type Props = {
	data: PostsResponse;
};

function BlogSwiper({ data }: Props) {
	const [activeIndex, setActiveIndex] = useState(0);
	const activePost = data[activeIndex];

	return (
		<div className="flex flex-col xl:flex-row justify-between pb-10">
			<div id="swiper-container" className="xl:max-w-[55%]">
				<Swiper
					spaceBetween={20}
					modules={[Pagination, Autoplay]}
					pagination={{
						clickable: true,
						el: ".custom-blog-pagination",
						renderBullet: (_, className) =>
							`<span class="${className} custom-dot"></span>`,
					}}
					autoplay={{
						delay: 2000,
					}}
					onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
				>
					{data.map((post, idx) => (
						<SwiperSlide key={idx}>
							<Image
								src={post.attributes.img}
								alt={post.attributes.title}
								width={600}
								height={430}
								className="w-full h-[430px] object-cover"
							/>
						</SwiperSlide>
					))}

					<div
						key={activePost.attributes.title}
						className="absolute bottom-10 right-10 left-10 flex justify-between text-white z-50 items-center"
					>
						<Link
							href={`/blog/${activePost.attributes.slug}`}
							className="text-2xl font-bold xl:max-w-[70%]"
						>
							{activePost.attributes.title}
						</Link>

						<Link
							href={`/blog/${activePost.attributes.slug}`}
							className="cursor-pointer"
						>
							<Image
								src={playButton}
								alt="play-button"
								width={55}
								height={55}
								className="cursor-pointer"
							/>
						</Link>
					</div>
				</Swiper>

				<div className="font-bold flex flex-col xl:flex-row xl:justify-between justify-center xl:items-start pt-8 xl:px-10">
					<Link
						href={`/blog/${activePost.attributes.slug}`}
						className="xl:max-w-[60%] font-condensed font-bold text-[25px]"
					>
						{activePost.attributes.desc.toUpperCase().substring(0, 80)} ...
					</Link>
					<div className="custom-blog-pagination flex justify-center py-14 xl:py-0 items-center gap-3"></div>
				</div>
			</div>

			<div className="flex flex-col gap-4 xl:max-w-[35%]">
				{data.slice(0, 4).map((post, idx) => (
					<div key={idx} className="flex gap-4 items-center z-50">
						<Link
							href={`/blog/${post.attributes.slug}`}
							className="h-full min-w-[175px]"
						>
							<Image
								src={post.attributes.img}
								alt={post.attributes.title}
								width={175}
								height={125}
								className=" h-full"
							/>
						</Link>

						<Link
							href={`/blog/${post.attributes.slug}`}
							className="text-[20px] xl:text-[25px] font-bold font-condensed tracking-normal"
						>
							{post.attributes.desc.toUpperCase().substring(0, 70)} ...
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default BlogSwiper;
