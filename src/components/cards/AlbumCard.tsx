import background1 from "@/assets/monthly-top-section/album-cards/1.png";
import shape1 from "@/assets/monthly-top-section/album-cards/1-shape.png";
import background2 from "@/assets/monthly-top-section/album-cards/2.png";
import shape2 from "@/assets/monthly-top-section/album-cards/2-shape.png";
import background3 from "@/assets/monthly-top-section/album-cards/3.png";
import shape3 from "@/assets/monthly-top-section/album-cards/3-shape.png";

import Image from "next/image";

type Props = {
	index: number;
	order: number;
	name: string;
	album: string;
	image: string;
};

const AlbumCard = ({ index }: Props) => {
	const backgrounds = [background1, background2, background3];
	const shapes = [shape1, shape2, shape3];
	const designIndex = index % 3;

	// This component uses a different shape each time for the array starting from 1 and ending on 3 and repeating

	return (
		<div className="relative w-[274px] h-[264px]">
			<Image
				src={backgrounds[designIndex]}
				alt="background"
				className="w-[274px] h-[264px]"
			/>
			<Image
				src={shapes[designIndex]}
				alt="shape"
				className="absolute bottom-0 left-0 w-full"
			/>
		</div>
	);
};

export default AlbumCard;
