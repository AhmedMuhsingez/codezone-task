"use client";
import { PostsResponse } from "@/types/types";
import DiscoverSectionHeader from "../DiscoverSectionHeader";
import user1 from "@/assets/trends-section/user1.png";
import user2 from "@/assets/trends-section/user2.png";
import user3 from "@/assets/trends-section/user3.png";
import DiscoverCard from "../cards/DiscoverCard";
import DiscoverCardsFilter from "../DiscoverCardsFilter";
import { useState } from "react";
import Footer from "./Footer";
import ShadowButton from "../ShadowButton";

type Props = {
	posts: PostsResponse;
};

function DiscoverSection({ posts }: Props) {
	const [filter, setFilter] = useState("Türk Rap");

	const renderPosts = posts
		.filter((post) => post.attributes.tags.includes(filter))
		.map((post, index) => {
			// Randomizing user details because they have not been provided with the API
			const designIndex = index % 3;
			const userImage = [user1, user2, user3][designIndex];
			const userName = ["Ismail Kor", "Jonathan Stewart", "Steve Rogerson"][designIndex];

			return (
				<div key={post._id}>
					<DiscoverCard
						userImage={userImage}
						userName={userName}
						title={post.attributes.title}
						desc={post.attributes.desc}
						slug={post.attributes.slug}
						date={new Date(post.createdAt)}
						mainImage={post.attributes.img}
					/>
				</div>
			);
		});
	return (
		<div
			className="flex  flex-col-reverse lg:flex-row lg:justify-around w-full pb-20 lg:px-0"
			id="discoverSection"
		>
			<div className="flex flex-col justify-between lg:w-[60%] px-6 gap-8 lg:gap-20">
				<DiscoverSectionHeader />

				<div className="grid grid-cols-1 gap-20">{renderPosts}</div>

				<div className="w-full flex justify-center">
					<ShadowButton shadow={false} name="Daha Fazla Gör" color="white" />
				</div>
			</div>

			<div className="flex flex-col lg:max-w-[30%] px-6">
				<DiscoverCardsFilter setFilter={setFilter} filter={filter} />

				<div className="lg:block hidden">
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default DiscoverSection;
