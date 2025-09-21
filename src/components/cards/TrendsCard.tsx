import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type Props = {
	id: number;
	image: StaticImageData;
	username: string;
	description: string;
};

const TrendsCard = ({ id, image, username, description }: Props) => {
	return (
		<div key={id} className="flex gap-10 lg:gap-20">
			<span className="font-condensed text-[#2A2A2A] text-6xl leading-0 mt-6 lg:mt-5">
				0{id}
			</span>

			<div className="flex flex-col gap-3">
				<div className="flex gap-4 items-center">
					<Image
						src={image}
						alt="user"
						width={33}
						height={33}
						className="w-[33px] h-[33px] rounded-xl"
					/>
					<span className="font-main text-[16px] font-bold lg:font-normal">
						{username}
					</span>
				</div>

				<span className="font-condensed font-bold text-xl lg:text-[25px] tracking-normal uppercase max-w-[60ch] overflow-hidden line-clamp-3">
					{description}
				</span>

				<div className="w-full h-[1px] bg-[#3B3B3B]" />

				<Link
					href={`/blog/${id}`}
					className="bg-none text-[16px] w-fit cursor-pointer transition duration-300 hover:text-gray-400 font-main"
				>
					Daha Fazla Oku
				</Link>
			</div>
		</div>
	);
};

export default TrendsCard;
