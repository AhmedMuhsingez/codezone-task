import Image from "next/image";
import icon from "@/assets/trends-section/icon.png";
import user1 from "@/assets/trends-section/user1.png";
import user2 from "@/assets/trends-section/user2.png";
import user3 from "@/assets/trends-section/user3.png";
import ShadowButton from "../ShadowButton";
import TrendsCard from "../cards/TrendsCard";
import TrendsCardCustom from "../cards/TrendsCardCustom";
type Props = {
	amountOfItems?: number;
	customTitleStyle?: string;
	customCard?: boolean;
};

function TrendsSection({ amountOfItems = 6, customTitleStyle, customCard }: Props) {
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

	const renderTrends = DATA.splice(0, amountOfItems).map((item) => {
		return customCard ? (
			<TrendsCardCustom
				key={item.id}
				description={item.description}
				id={item.id}
				image={item.image}
				username={item.username}
			/>
		) : (
			<TrendsCard
				key={item.id}
				description={item.description}
				id={item.id}
				image={item.image}
				username={item.username}
			/>
		);
	});
	return (
		<div className={`flex flex-col gap-16 ${customTitleStyle ? "pt-20" : "py-20"}`}>
			<div
				className={`flex items-center justify-center lg:justify-start gap-3 ${
					customTitleStyle ? "" : "lg:pl-14 "
				}`}
			>
				<span
					className={`font-condensed font-bold text-[40px] lg:text-6xl ${customTitleStyle}`}
				>
					TRENDLER
				</span>
				<Image
					src={icon}
					alt="trends-icon"
					width={66}
					height={66}
					className="w-[40px] h-[40px] lg:w-[66px] lg:h-[66px]"
				/>
			</div>

			<div className={`${customCard ? "" : "pl-4 pr-10 lg:pl-14 lg:pr-14"}`}>
				<div
					className={`grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-10 ${
						customCard ? "" : "lg:grid-cols-3"
					}`}
				>
					{renderTrends}
				</div>

				<div className="flex items-center justify-center mt-20">
					<ShadowButton name="Tümünü Gör" shadow={false} color="white" />
				</div>
			</div>
		</div>
	);
}

export default TrendsSection;
