import Image, { StaticImageData } from "next/image";

import shape1 from "../assets/monthly-top-section/shape1.png";
type Props = {
	order: number;
	name: string;
	album: string;
	image: StaticImageData;
};

const MonthlyTopCard = (props: Props) => {
	return (
		<div className="w-[260px] h-[400px] lg:h-[260px] flex justify-center items-center relative bg-[#2A2A2A] overflow-hidden">
			{/* <Image/> */}
			<div></div>

			<Image src={shape1} alt="shape" className="absolute bottom-0 left-0 w-full" />
		</div>
	);
};

export default MonthlyTopCard;
