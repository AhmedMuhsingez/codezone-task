import Image from "next/image";
import discover from "../assets/discover-section/discover.png";
import search from "@/assets/search-icon.png";
import menuView from "../assets/discover-section/menu-view.png";
import gridView from "../assets/discover-section/grid-view.png";
type Props = {};

function DiscoverSectionHeader({}: Props) {
	return (
		<div className="flex justify-between">
			<div className="flex gap-4 items-center">
				<span className="font-condensed text-[40px] lg:text-6xl font-bold">KEŞFET</span>

				<Image
					src={discover}
					alt="discover"
					width={53}
					height={53}
					className="lg:w-[53px] lg:h-[53px] w-[42px] h-[42px] "
				/>
			</div>

			<div className="flex gap-6 items-center">
				<Image
					src={search}
					alt="search"
					width={23}
					height={22}
					className="w-[23px] h-[22px] cursor-pointer"
				/>

				<Image
					src={menuView}
					alt="menu-view"
					width={23}
					height={22}
					className="w-[23px] h-[22px] cursor-pointer"
				/>

				<Image
					src={gridView}
					alt="grid-view"
					width={23}
					height={22}
					className="w-[23px] h-[22px] cursor-pointer"
				/>
			</div>
		</div>
	);
}

export default DiscoverSectionHeader;
