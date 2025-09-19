import Image from "next/image";
import search from "../assets/search-icon.png";
import { LINKS } from "@/data/data";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className="bg-[#1212121A] lg:border-b border-[#2A2A2A] flex items-center p-4 lg:px-20 lg:py-2 sticky top-0 left-0 right-0 justify-between backdrop-blur-xl z-[99]">
			<div className="flex items-center gap-20">
				<a href="/" className="cursor-pointer">
					<Image
						src="/logo.png"
						alt="logo"
						width={235}
						height={60}
						className="w-[183px] lg:min-w-[235px]"
					/>
				</a>

				<div className="lg:flex hidden">
					{LINKS.map((link) => (
						<a href={link.href} className="mx-4 font-normal" key={link.name}>
							{link.name}
						</a>
					))}
				</div>
			</div>

			<div className="lg:flex hidden gap-8 items-center">
				<Image
					src={search}
					alt="search"
					width={20}
					height={20}
					className="cursor-pointer"
				/>
				<button className=" w-[120px] h-10 bg-white text-black font-bold cursor-pointer">
					GİRİŞ YAP
				</button>
			</div>

			<div className="lg:hidden flex">
				<Image src={"/menu-icon.png"} alt="menu" width={30} height={30} />
			</div>
		</div>
	);
};

export default Navbar;
