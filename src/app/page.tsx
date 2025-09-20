import DiscoverSection from "@/components/sections/DiscoverSectionMainPage";
import Footer from "@/components/sections/Footer";
import HeroSwiper from "@/components/sections/HeroSwiper";
import MonthlyTopSection from "@/components/sections/MonthlyTopSection";
import TrendsSection from "@/components/sections/TrendsSection";
import TwitchSection from "@/components/sections/TwitchSection";
import { PostsResponse } from "@/types/types";

export default async function Home() {
	const res = await fetch("https://dummyjson.com/c/a7c4-016a-47aa-8241", {
		next: { revalidate: 60 },
	});
	const data: PostsResponse = await res.json();

	return (
		<>
			<HeroSwiper />
			<TwitchSection />
			<TrendsSection />
			<MonthlyTopSection />
			<DiscoverSection posts={data} />
			<div className="block lg:hidden  px-6 pb-10">
				<Footer />
			</div>
		</>
	);
}
