import background1 from "@/assets/monthly-top-section/album-cards/1.png";
import shape1 from "@/assets/monthly-top-section/album-cards/1-shape.png";
import background2 from "@/assets/monthly-top-section/album-cards/2.png";
import shape2 from "@/assets/monthly-top-section/album-cards/2-shape.png";
import background3 from "@/assets/monthly-top-section/album-cards/3.png";
import shape3 from "@/assets/monthly-top-section/album-cards/3-shape.png";

import playButton from "@/assets/monthly-top-section/album-cards/play-button.png";

import Image from "next/image";

type Props = {
	index: number;
	order: number;
	name: string;
	album: string;
	image: string;
};

const AlbumCard = ({ index, image, name, album, order }: Props) => {
	const backgrounds = [background1, background2, background3];
	const shapes = [shape1, shape2, shape3];
	const designIndex = index % 3;

	// This component uses a different shape each time for the array starting from 1 and ending on 3 and repeating

	return (
		<div className="relative w-[274px] h-[264px] overflow-hidden">
			<Image
				src={backgrounds[designIndex]}
				alt="background"
				className="w-[274px] h-[264px] z-10 absolute top-0 left-0"
			/>

			<Image
				src={shapes[designIndex]}
				alt="shape"
				className="absolute bottom-0 left-0 w-full z-20"
			/>

			<div className="absolute top-10 -left-[104px] -rotate-[10deg] w-[185px] h-[185px] z-20">
				<Image
					src={image}
					alt="album-image"
					className="rounded-lg w-full h-full object-cover"
					width={185}
					height={185}
				/>

				<Image
					src={playButton}
					alt="play-button"
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
					width={50}
					height={50}
				/>
			</div>

			<div className="absolute top-0 left-0 w-[274px] h-[264px] z-50 font-main flex flex-col justify-center items-center gap-4 ps-20">
				<div className="bg-[#323232] w-fit rounded-3xl px-3 py-1 text-[16px]">
					<span className="">Top 10 </span>
					<span className="font-bold">({order}. Sira)</span>
				</div>

				<div className="text-xl flex flex-col leading-tight">
					<span className="">{name.toUpperCase()}</span>
					<span className="font-bold">{album.toUpperCase()}</span>
				</div>
			</div>
		</div>
	);
};

export default AlbumCard;
