"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import ShadowButton from "../ShadowButton";
import swiperEffect from "@/assets/swiper-effect.png";
import Image from "next/image";
import { useState } from "react";

export default function HeroSwiper() {
	const SWIPER_DATA = [
		{
			id: 1,
			image: "/swiper-images/1.png",
			title: "DÜNYA RAP TRENDLERİNİ KONUŞUYORUZ.",
			description: "",
			lightBG: true,
		},
		{
			id: 2,
			image: "/swiper-images/2.png",
			title: "TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET",
			description: "",
			lightBG: false,
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const currentSlide = SWIPER_DATA[activeIndex];

	const slides = SWIPER_DATA.map((item) => {
		return (
			<SwiperSlide key={item.id} className="font-main w-full flex justify-items-center">
				<img
					src={item.image}
					alt={item.title}
					className="relative select-none w-full h-[65vh] object-cover lg:h-[100vh] mt-80 lg:mt-0"
				/>
			</SwiperSlide>
		);
	});

	return (
		<div className="relative -top-14">
			<Swiper
				spaceBetween={30}
				effect="fade"
				fadeEffect={{
					crossFade: true,
				}}
				pagination={{
					el: ".custom-pagination",
					clickable: true,
					renderBullet: (_, className) =>
						`<span class="${className} custom-dot"></span>`,
				}}
				modules={[Pagination, Navigation]}
				onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
				className="mySwiper absolute inset-0 "
				navigation={{
					nextEl: ".custom-next",
					prevEl: ".custom-prev",
					disabledClass: "cursor-not-allowed! opacity-50",
				}}
			>
				{slides}

				<Image
					className="absolute bottom-14 lg:bottom-4 left-0 z-10 w-full pointer-events-none"
					src={swiperEffect}
					alt="effect"
				/>
			</Swiper>

			<div className="absolute w-full inset-0 flex justify-center lg:items-center lg:justify-end z-50 pr-0 md:pr-40 mt-20 lg:mt-0 lg:text-start pointer-events-auto">
				<div
					className={`flex flex-col gap-8 transition-all duration-500 ease-in-out text-center lg:text-start items-center lg:items-start ${
						currentSlide.lightBG ? "text-white lg:text-black" : "text-white"
					}`}
				>
					<h1 className="font-condensed text-3xl lg:text-6xl font-bold max-w-[241px] lg:max-w-[482px] transition-all duration-500">
						{currentSlide.title}
					</h1>

					<p className="text-[14px] lg:text-[16px] font-normal font-main max-w-[380px] transition-all duration-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi
					</p>

					<ShadowButton />

					<div className="custom-pagination hidden lg:flex items-center gap-1 justify-start mt-8"></div>
				</div>
			</div>

			<span className="custom-prev hidden lg:block absolute top-1/2 left-12 -translate-y-1/2 cursor-pointer z-[99] icon-[material-symbols-light--arrow-back] text-5xl " />
			<span className="custom-next hidden lg:block absolute top-1/2 right-12 -translate-y-1/2 cursor-pointer z-[99] icon-[material-symbols-light--arrow-back] rotate-180 text-5xl" />
		</div>
	);
}
