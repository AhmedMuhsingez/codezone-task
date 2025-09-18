"use client";

type Props = {
	setFilter: (filter: string) => void;
	filter: string;
};

function DiscoverCardsFilter({ setFilter, filter }: Props) {
	const FILTERS = [
		{ id: 1, name: "Türk Rap" },
		{ id: 2, name: "Yabancı Rap" },
		{ id: 3, name: "Rap Haberleri" },
		{ id: 4, name: "Haftanın Klipleri" },
		{ id: 5, name: "Ayın Klipleri" },
		{ id: 6, name: "Rap Sohbetleri" },
		{ id: 7, name: "Rap Müsabakaları" },
	];

	const handleFilterClick = (name: string) => {
		setFilter(name);
	};

	return (
		<div className="flex flex-col gap-10 pt-10 pb-16 relative max-w-[100%]">
			<span className="font-condensed text-[40px] font-bold px-6">NE GÖRMEK İSTERSİN?</span>

			<div className="flex gap-4 lg:flex-wrap flex-nowrap overflow-x-scroll lg:overflow-x-visible no-scrollbar">
				{FILTERS.map((item) => {
					const isActive = item.name === filter;
					const isFirst = item.id === 1;
					return (
						<button
							key={item.id}
							onClick={() => handleFilterClick(item.name)}
							className={`relative font-main text-[16px] cursor-pointer px-8 py-3 transform transition-all duration-300 flex-shrink-0 ${
								isActive
									? "bg-[#F0E74D] text-black font-bold"
									: "text-white border border-white"
							} ${isFirst && "ms-6"}
							}`}
						>
							{item.name}
						</button>
					);
				})}
			</div>
		</div>
	);
}

export default DiscoverCardsFilter;
