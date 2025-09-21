import { CLIPS_DATA } from "@/data/data";
import Image from "next/image";
import icon from "@/assets/clips/icon.png";
import ShadowButton from "../ShadowButton";
import peaceSign from "@/assets/clips/peace-sign.png";

type Props = {};

function ClipsSection({}: Props) {
	const renderClips = CLIPS_DATA.map((clip) => {
		return (
			<div key={clip.id} className="flex flex-col gap-4">
				<Image src={clip.image} alt={clip.title} />
				<p className="font-condensed font-bold text-[20px]">{clip.title.toUpperCase()}</p>
			</div>
		);
	});
	return (
		<div className="flex flex-col lg:hidden px-6 relative">
			<div className="flex gap-4 items-center  py-8">
				<span className="font-bold font-condensed text-[40px]">KLİPLER</span>
				<Image src={icon} alt="icon" height={28} />
			</div>

			<div className="flex flex-col gap-4">
				{renderClips}

				<Image
					src={peaceSign}
					alt="peace-sign"
					className="lg:hidden block absolute bottom-0 right-0 -z-10"
				/>
			</div>

			<div className="w-full flex justify-center py-10 mt-6">
				<ShadowButton color="white" shadow={false} name="Daha Fazla Gör" />
			</div>
		</div>
	);
}

export default ClipsSection;
