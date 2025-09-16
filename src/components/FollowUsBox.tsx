type Props = {};

function FollowUsBox({}: Props) {
	return (
		<div className="border border-[#2A2A2A] rounded-3xl lg:p-4 p-3 flex gap-4 z-50 -rotate-[5deg]">
			<button
				className="bg-[#864CF6] lg:px-4 lg:py-3 p-2 rounded-xl flex align-center items-center gap-1 font-bold cursor-pointer hover:bg-[#854cf6c4] transition duration-300"
				style={{ fontFamily: "Helvetica" }}
			>
				<span className="icon-[charm--heart] text-lg lg:text-2xl"></span>
				Takip Et
			</button>

			<button
				className="bg-[#222123] lg:px-4 lg:py-3 p-2 rounded-xl flex align-center items-center gap-1 font-bold cursor-pointer hover:bg-[#201f1f] transition duration-300"
				style={{ fontFamily: "Helvetica" }}
			>
				<span className="icon-[material-symbols--star-outline-rounded] text-lg lg:text-2xl"></span>
				Abone Ol
				<span className="icon-[zondicons--cheveron-down] text-lg lg:text-2xl"></span>
			</button>
		</div>
	);
}

export default FollowUsBox;
