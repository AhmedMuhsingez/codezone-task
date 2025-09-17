import DiscoverSection from "@/components/sections/DiscoverSection";
import HeroSwiper from "@/components/sections/HeroSwiper";
import MonthlyTopSection from "@/components/sections/MonthlyTopSection";
import TrendsSection from "@/components/sections/TrendsSection";
import TwitchSection from "@/components/sections/TwitchSection";

export default function Home() {
	return (
		<>
			<HeroSwiper />
			<TwitchSection />
			<TrendsSection />
			<MonthlyTopSection />
			<DiscoverSection />
		</>
	);
}
