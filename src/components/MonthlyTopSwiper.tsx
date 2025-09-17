"use client";
import AlbumCard from "./cards/AlbumCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

import "@/styles/monthly-swiper.css";

type Props = {};

const MonthlyTopSwiper = (props: Props) => {
	const TOP10ALBUMS = [
		{
			order: 2,
			name: "50 Cent",
			album: "Curtis",
			image: "/album-images/1.png",
		},
		{
			order: 3,
			name: "Snopp Dogg",
			album: "Algorithm",
			image: "/album-images/2.png",
		},
		{
			order: 4,
			name: "50 Cent",
			album: "Curtis",
			image: "/album-images/3.png",
		},
		{
			order: 5,
			name: "Snopp Dogg",
			album: "Algorithm",
			image: "/album-images/1.png",
		},
		{
			order: 6,
			name: "Snopp Dogg",
			album: "Algorithm",
			image: "/album-images/2.png",
		},
	];

	return (
		<Swiper
			spaceBetween={0}
			centeredSlides
			modules={[Scrollbar]}
			scrollbar={{ draggable: true, dragSize: 150 }}
			slidesPerView={1.3}
			breakpoints={{
				640: {
					slidesPerView: 1.5,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 2.5,
					spaceBetween: 10,
					centeredSlides: false,
				},
			}}
			className="mySwiper absolute inset-0"
		>
			{TOP10ALBUMS.map((album, index) => (
				<SwiperSlide
					key={index}
					className="flex justify-center items-center justify-items-center"
				>
					<AlbumCard
						order={album.order}
						name={album.name}
						album={album.album}
						image={album.image}
						index={index}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default MonthlyTopSwiper;
