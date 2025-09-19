import Image from "next/image";
import { LINKS, SOCIAL_LINKS } from "@/data/data";
import StayConnected from "../StayConnected";
type Props = {};

function Footer({}: Props) {
	return (
		<div className="flex flex-col gap-4 pt-10 font-main">
			<StayConnected />

			<div className="flex gap-4 items-center">
				{SOCIAL_LINKS.map((link) => (
					<a
						href={link.link}
						key={link.name}
						target="_blank"
						className="cursor-pointer hover:scale-105 transition duration-300"
					>
						<Image src={link.logo} alt={link.name} />
					</a>
				))}
			</div>

			<div className="flex gap-4 text-[14px] flex-wrap-reverse pt-10 lg:pt-20">
				{LINKS.map((link) => (
					<a href={link.href} className="font-normal" key={link.name}>
						{link.name}
					</a>
				))}
			</div>

			<span className="text-[14px] text-[#5C5C5C]">
				© RAPKOLOGY All Rights Are Reserved 2022.
			</span>
		</div>
	);
}

export default Footer;
