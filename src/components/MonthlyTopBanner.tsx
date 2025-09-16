type Props = {};

function MonthlyTopBanner({}: Props) {
	return (
		<div
			className="bg-white absolute top-0 left-0 flex justify-center items-center gap-5 lg:gap-10 px-10 lg:px-32 py-4 lg:py-8"
			style={{
				clipPath: "polygon(0 0, 100% 0, 89% 80%, 0% 100%)",
			}}
		>
			<div className="text-black flex items-center gap-1">
				<span className="icon-[mdi--youtube] text-5xl lg:text-6xl" />
				<span className="font-condensed text-2xl lg:text-4xl">YouTube</span>
			</div>

			<div className="text-black flex items-center gap-1">
				<span className="icon-[mdi--spotify] text-4xl lg:text-5xl"></span>
				<span className="font-condensed text-2xl lg:text-4xl">Spotify</span>®
			</div>
		</div>
	);
}

export default MonthlyTopBanner;
