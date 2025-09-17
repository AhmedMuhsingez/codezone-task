import Image from "next/image";
import search from "@/assets/search-icon.png";
import gridView from "@/assets/discover-section/grid-view.png";
import menuView from "@/assets/discover-section/menu-view.png";
import discover from "@/assets/discover-section/discover.png";
type Props = {};

function DiscoverSection({}: Props) {
	return (
		<div className="flex flex-col lg:flex-row items-center lg:pl-14 lg:justify-around pb-24 w-full">
			<div className="flex justify-between w-[60%]">
				<div className="flex gap-4">
					<span className="font-condensed text-6xl font-bold">KEŞFET</span>

					<Image
						src={discover}
						alt="discover"
						// className="w-[53px] h-[53px]"
						width={53}
						height={53}
					/>
				</div>

				<div className="flex gap-2 items-center">
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

			<div className="flex w-[40%]"></div>
		</div>
	);
}

export default DiscoverSection;
