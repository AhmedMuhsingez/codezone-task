import Image from "next/image";
import banner from "@/assets/twitch-section/banner.png";
import male from "@/assets/twitch-section/male.png";
import female from "@/assets/twitch-section/female.png";
import effect from "@/assets/twitch-section/effect.png";
import FollowUsBox from "../FollowUsBox";

type Props = {};

const TwitchSection = (props: Props) => {
	return (
		<div className="w-full h-[642px] relative flex flex-col items-center bg-[url('/twitch-background.png')] bg-cover bg-center overflow-hidden">
			<Image src={banner} alt="banner" className="w-80 lg:w-[504px]" priority={true} />

			<FollowUsBox />

			<div className="w-full h-full absolute top-0 hidden lg:flex items-center justify-between lg:justify-around mt-10 lg:mt-0">
				<Image src={male} alt="male-overlay" className="" priority={true} />
				<Image src={female} alt="overlay" className="" priority={true} />
			</div>

			<Image
				src={male}
				alt="male-overlay"
				className="block lg:hidden absolute  -bottom-20 -left-30"
				priority={true}
			/>
			<Image
				src={female}
				alt="overlay"
				className="block lg:hidden absolute -bottom-40 -right-20"
				priority={true}
			/>

			<Image
				src={effect}
				alt="effect"
				className="w-full z-50 absolute bottom-0"
				priority={true}
			/>
		</div>
	);
};

export default TwitchSection;
