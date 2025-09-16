type Props = {
	name?: string;
	shadow?: boolean;
	color?: string;
};

function ShadowButton({ name, shadow = true, color = "#F0E74D" }: Props) {
	return (
		<div
			style={{
				filter: shadow ? "drop-shadow(8px 8px 0px #000000)" : "",
			}}
		>
			<button
				className={`relative cursor-pointer text-black font-bold text-[14px] px-8 py-3 transform transition-all duration-200 w-fit`}
				style={{
					clipPath: "polygon(0 0, 100% 0, 94% 100%, 5% 94%)",
					zIndex: 10,
					backgroundColor: color,
				}}
			>
				{name ?? "Devamını Oku"}
			</button>
		</div>
	);
}

export default ShadowButton;
