import HeroSwiper from "@/components/sections/HeroSwiper";
import TrendsSection from "@/components/sections/TrendsSection";
import TwitchSection from "@/components/sections/TwitchSection";

export default function Home() {
	return (
		<>
			<HeroSwiper />
			<TwitchSection />
			<TrendsSection />
		</>
	);
}
