import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
	userImage: StaticImageData;
	userName: string;
	title: string;
	desc: string;
	slug: string;
	date: Date;
	mainImage: string;
};

function DiscoverCard({ userImage, userName, title, desc, slug, date, mainImage }: Props) {
	const formattedDate = date.toLocaleDateString("tr-TR", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<div className="flex gap-6 flex-col lg:flex-row">
			<div className="flex flex-col justify-between">
				<Image
					src={mainImage}
					width={301}
					height={196}
					alt={title}
					className="lg:min-w-[301px] lg:min-h-[196px] min-w-full mb-6 lg:mb-0"
				/>
				<p className="text-[16px] text-[#3B3B3B] font-main">{formattedDate}</p>
			</div>

			<div className="flex flex-col justify-between gap-5">
				<div className="flex items-center gap-3">
					<Image
						src={userImage}
						alt={userName}
						width={32}
						height={32}
						className="rounded-xl"
					/>
					<span className="text-[16px] font-main">{userName}</span>
				</div>

				<p className="mt-1 line-clamp-4 font-condensed text-[25px] font-bold letter tracking-tight">
					{desc.toLocaleUpperCase()}
				</p>

				<div className="w-full h-[1px] bg-[#3B3B3B]" />

				<Link
					href={`/discover/${slug}`}
					className="text-[16px] font-main inline-block transition duration-300 hover:text-gray-400"
				>
					Daha Fazla Oku
				</Link>
			</div>
		</div>
	);
}

export default DiscoverCard;
