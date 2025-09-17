import MonthlyTopBanner from "../MonthlyTopBanner";
import MonthlyTopCard from "../MonthlyTopCard";

type Props = {};

function MonthlyTopSection({}: Props) {
	const ALBUMS_DATA = [
		{
			order: 1,
			name: "The Weeknd",
			album: "After Hours",
			image: "",
		},
	];
	return (
		// remove height from here
		<div className="relative h-[447px] flex flex-col lg:flex-row items-center">
			<MonthlyTopBanner />

			<div className="flex lg:pl-14 text-center flex-col lg:flex-row items-center justify-between">
				<span className="font-condensed text-6xl text-start font-bold max-w-[245px] pt-32 pb-20 lg:py-0">
					AYIN FAVORİLERİ
				</span>

				<MonthlyTopCard />
			</div>
		</div>
	);
}

export default MonthlyTopSection;
