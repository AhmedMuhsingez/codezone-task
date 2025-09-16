import Image from "next/image";
import search from "../assets/search-icon.png";
type Props = {};

const Navbar = (props: Props) => {
	const NAVBAR_LINKS = [
		{
			name: "HABERLER",
			href: "/",
		},
		{
			name: "ETKİNLİKLER",
			href: "/",
		},
		{
			name: "MÜZİKLER",
			href: "/",
		},
		{
			name: "VİDEOLAR",
			href: "/",
		},
		{
			name: "İLETİŞİM",
			href: "/",
		},
	];
	return (
		<div className="bg-[#1212121A] border-b border-[#2A2A2A] flex items-center px-20 py-2 absolute top-0 left-0 right-0 justify-between backdrop-blur-xl z-50">
			<div className="flex items-center gap-20">
				<a href="/" className="cursor-pointer">
					<Image
						src="/logo.png"
						alt="logo"
						width={235}
						height={60}
						className="min-w-[235px] "
					/>
				</a>

				<div className="lg:flex hidden">
					{NAVBAR_LINKS.map((link) => (
						<a href={link.href} className="mx-4 font-normal" key={link.name}>
							{link.name}
						</a>
					))}
				</div>
			</div>

			<div className="flex gap-8 items-center">
				{/* <span className="icon-[fe--search] bg-white text-white cursor-pointer w-5 h-5" /> */}
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
		</div>
	);
};

export default Navbar;
