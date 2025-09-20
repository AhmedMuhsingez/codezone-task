"use client";
import { PostsResponse } from "@/types/types";
import DiscoverSectionHeader from "../DiscoverSectionHeader";
import Image from "next/image";
import gem from "@/assets/blog/gem.png";
import DiscoverCardsFilter from "../DiscoverCardsFilter";
import { useState } from "react";
import DiscoverCard from "../cards/DiscoverCard";
import user1 from "@/assets/trends-section/user1.png";
import user2 from "@/assets/trends-section/user2.png";
import user3 from "@/assets/trends-section/user3.png";
import ShadowButton from "../ShadowButton";
import peaceSign from "@/assets/blog/peace-sign.png";

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

	const hasLoadMore = posts.filter((post) => post.attributes.tags.includes(filter)).length > 8;
	const showPeaceSign =
		posts.filter((post) => post.attributes.tags.includes(filter)).length > 2;

	return (
		<div className="lg:p-20 relative">
			<Image
				src={gem}
				alt="discover"
				className="hidden lg:block absolute top-0 left-0 -z-10"
			/>

			<div className="p-6 lg:p-0">
				<DiscoverSectionHeader />
			</div>

			<DiscoverCardsFilter filter={filter} setFilter={setFilter} noTitle />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-6 lg:p-0 relative">
				{renderPosts}

				{showPeaceSign && (
					<Image
						src={peaceSign}
						alt="peace-sign"
						className="lg:hidden block absolute bottom-0 right-0 -z-10"
					/>
				)}
			</div>

			{hasLoadMore && (
				<div className="w-full flex justify-center py-10 lg:py-20">
					<ShadowButton color="white" shadow={false} name="Daha Fazla Gör" />
				</div>
			)}
		</div>
	);
}

export default DiscoverSection;
