import youtube from "../assets/monthly-top-section/youtube.png";
import spotify from "../assets/monthly-top-section/spotify.png";

import Image from "next/image";

type Props = {};

function MonthlyTopBanner({}: Props) {
	return (
		<div
			className="bg-white absolute top-0 left-0 flex justify-center items-center gap-5 lg:gap-10 px-16 lg:px-32 py-6 lg:py-10"
			style={{
				clipPath: "polygon(0 0, 100% 0, 89% 80%, 0% 100%)",
			}}
		>
			<div className="text-black flex items-center gap-1">
				<Image src={youtube} alt="youtube logo" className="w-[113px] lg:w-[162px]" />
			</div>

			<div className="text-black flex items-center gap-1">
				<Image src={spotify} alt="spotify logo" className="w-[113px] lg:w-[160px]" />
			</div>
		</div>
	);
}

export default MonthlyTopBanner;
