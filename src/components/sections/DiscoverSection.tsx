import { PostsResponse } from "@/types/types";
import DiscoverSectionHeader from "../DiscoverSectionHeader";
import user1 from "@/assets/trends-section/user1.png";
import user2 from "@/assets/trends-section/user2.png";
import user3 from "@/assets/trends-section/user3.png";
import DiscoverCard from "../cards/DiscoverCard";

type Props = {
	posts: PostsResponse;
};

function DiscoverSection({ posts }: Props) {
	const renderPosts = posts.map((post, index) => {
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
		<div className="flex flex-col lg:flex-row items-center lg:pl-14 lg:justify-around w-full pb-20">
			<div className="flex flex-col justify-between w-[60%]">
				<DiscoverSectionHeader />
				<div className="grid grid-cols-1 gap-20">{renderPosts}</div>
			</div>

			<div className="flex w-[40%]"></div>
		</div>
	);
}

export default DiscoverSection;
