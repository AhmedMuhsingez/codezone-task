"use client";
import { PostsResponse } from "@/types/types";
import DiscoverSectionHeader from "../DiscoverSectionHeader";
import Image from "next/image";
import gem from "@/assets/blog/gem.png";
import DiscoverCardsFilter from "../DiscoverCardsFilter";
import { useState } from "react";
type Props = {
	posts: PostsResponse;
};

function DiscoverSection({}: Props) {
	const [filter, setFilter] = useState("Türk Rap");

	return (
		<div className="lg:p-20 p-6 relative">
			<Image
				src={gem}
				alt="discover"
				className="hidden lg:block absolute top-0 left-0 -z-10"
			/>

			<DiscoverSectionHeader />

			<DiscoverCardsFilter filter={filter} setFilter={setFilter} noTitle />
		</div>
	);
}

export default DiscoverSection;
