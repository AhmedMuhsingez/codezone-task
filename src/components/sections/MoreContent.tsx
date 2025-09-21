import { CLIPS_DATA } from "@/data/data";
import Image from "next/image";
type Props = {};

function MoreContent({}: Props) {
	return (
		<div>
			<p
				className="font-condensed font-bold text-[40px] lg:text-[60px] leading-[89%] my-20"
				id="more-content"
			>
				DAHA FAZLA İÇERİK
			</p>

			<div className="flex flex-col gap-8">
				{CLIPS_DATA.map((item) => {
					const isLastItem = item.id === CLIPS_DATA.length;
					return (
						<div key={item.id} className="flex flex-col gap-8">
							<div className="flex gap-4">
								<Image src={item.image} alt={item.title} width={88} height={78} />
								<p className="font-condensed font-bold text-[25px] leading-[104%] cursor-pointer hover:text-gray-400 transition duration-300 line-clamp-3">
									{item.title.toUpperCase()}
								</p>
							</div>

							{!isLastItem && <div className="border border-[#3B3B3B]" />}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default MoreContent;
