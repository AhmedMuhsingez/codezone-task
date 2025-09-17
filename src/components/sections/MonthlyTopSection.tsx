import MonthlyTopBanner from "../MonthlyTopBanner";
import MonthlyTopCard from "../MonthlyTopSwiper";

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
		<div className="relative flex flex-col lg:flex-row items-center lg:pl-14 lg:justify-between py-20 overflow-visible">
			<MonthlyTopBanner />

			<span className="font-condensed text-6xl text-start font-bold max-w-[245px] pt-32 pb-20 lg:py-0 lg:w-1/3">
				AYIN FAVORİLERİ
			</span>

			<div className="lg:w-[60%] w-full">
				<MonthlyTopCard />
			</div>
		</div>
	);
}

export default MonthlyTopSection;
