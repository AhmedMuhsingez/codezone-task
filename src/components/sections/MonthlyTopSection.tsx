import MonthlyTopBanner from "../MonthlyTopBanner";
import MonthlyTopSwiper from "../MonthlyTopSwiper";

type Props = {};

function MonthlyTopSection({}: Props) {
	return (
		<div className="relative flex flex-col lg:flex-row items-center lg:pl-14 lg:justify-between py-24 overflow-visible">
			<MonthlyTopBanner />

			<span className="font-condensed text-6xl font-bold max-w-[245px] pt-32 pb-20 lg:py-0 lg:w-1/3 text-center lg:text-start">
				AYIN FAVORİLERİ
			</span>

			<div className="lg:w-[60%] w-full">
				<MonthlyTopSwiper />
			</div>
		</div>
	);
}

export default MonthlyTopSection;
