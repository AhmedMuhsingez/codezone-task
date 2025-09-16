type Props = {
	name?: string;
};

function ShadowButton({ name }: Props) {
	return (
		<div
			style={{
				filter: "drop-shadow(8px 8px 0px #000000)",
			}}
		>
			<button
				className="relative bg-[#F0E74D]  cursor-pointer text-black font-bold text-[14px] px-8 py-3 transform transition-all duration-200 w-fit"
				style={{
					clipPath: "polygon(0 0, 100% 0, 94% 100%, 5% 94%)",
					zIndex: 10,
				}}
			>
				{name ?? "Devamını Oku"}
			</button>
		</div>
	);
}

export default ShadowButton;
