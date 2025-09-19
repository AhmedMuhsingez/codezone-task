import Image from "next/image";
import arrow from "../assets/arrow-right.png";

type Props = {};

function StayConnected({}: Props) {
	return (
		<div className="flex flex-col lg:items-center gap-8">
			<span className="font-condensed font-bold text-[25px] lg:text-[40px]">
				GELİŞMELERDEN İLK SEN HABERDAR OL!
			</span>

			<div className="flex justify-between w-full items-center border-b border-[#3B3B3B] pb-6">
				<input
					placeholder="EMAIL"
					className="focus:outline-none text-white font-main font-bold text-[14px] placeholder:text-white"
				/>

				<button className="flex items-center gap-2 text-[#F0E74D] font-main font-bold text-[14px] group cursor-pointer">
					GÖNDER
					<Image
						src={arrow}
						alt="send"
						width={14}
						height={14}
						className="group-hover:translate-x-1 transition duration-300"
					/>
				</button>
			</div>
		</div>
	);
}

export default StayConnected;
