import Image from "next/image";
import icon from "@/assets/trends-section/icon.png";
import user1 from "@/assets/trends-section/user1.png";
import user2 from "@/assets/trends-section/user2.png";
import user3 from "@/assets/trends-section/user3.png";
import ShadowButton from "../ShadowButton";
type Props = {};

function TrendsSection({}: Props) {
	const DATA = [
		{
			id: 1,
			image: user1,
			username: "Ismail Kor",
			description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
		},
		{
			id: 2,
			image: user2,
			username: "Steve Rogerson",
			description:
				"Praesent lorem orci, mattis non efficitur id Curabitur at risus sodales Aenean at  at risus sodales Aenean at.",
		},
		{
			id: 3,
			image: user3,
			username: "Ismail Kor",
			description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
		},
		{
			id: 4,
			image: user1,
			username: "Jonathan Stewart",
			description:
				"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi  at risus sodales Aenean at.",
		},
		{
			id: 5,
			image: user2,
			username: "Steve Rogerson",
			description:
				"Praesent lorem orci, mattis non efficitur id Curabitur at risus sodales Aenean at.",
		},
		{
			id: 6,
			image: user3,
			username: "Ismail Kor",
			description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
		},
	];

	const renderTrends = DATA.map((item) => {
		return (
			<div key={item.id} className="flex gap-10 lg:gap-20">
				<span className="font-condensed text-[#2A2A2A] text-6xl leading-0 mt-6 lg:mt-5">
					0{item.id}
				</span>

				<div className="flex flex-col gap-3">
					<div className="flex gap-4 items-center">
						<Image
							src={item.image}
							alt="user"
							width={33}
							height={33}
							className="w-[33px] h-[33px] rounded-xl"
						/>
						<span className="font-main text-[16px] font-bold lg:font-normal">
							{item.username}
						</span>
					</div>

					<span className="font-condensed font-bold text-xl lg:text-[25px] tracking-normal uppercase max-w-[60ch] overflow-hidden line-clamp-3">
						{item.description}
					</span>

					<div className="w-full h-[1px] bg-[#3B3B3B]" />

					<a
						href=""
						className="bg-none text-[16px] w-fit cursor-pointer transition duration-300 hover:text-gray-400 font-main"
					>
						Daha Fazla Oku
					</a>
				</div>
			</div>
		);
	});
	return (
		<div className="py-20 pl-4 pr-10 lg:pl-14 lg:pr-14 flex flex-col gap-16">
			<div className="flex items-center justify-center lg:justify-start gap-6">
				<span className="font-condensed font-bold text-[40px] lg:text-6xl">TRENDLER</span>
				<Image
					src={icon}
					alt="trends-icon"
					width={66}
					height={66}
					className="w-[40px] h-[40px] lg:w-[66px] lg:h-[66px]"
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-16">
				{renderTrends}
			</div>

			<div className="flex items-center justify-center mt-10 lg:mt-0">
				<ShadowButton name="Tümünü Gör" shadow={false} color="white" />
			</div>
		</div>
	);
}

export default TrendsSection;
