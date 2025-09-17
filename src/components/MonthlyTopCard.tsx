import AlbumCard from "./cards/AlbumCard";
type Props = {};

const MonthlyTopCard = (props: Props) => {
	const TOP10ALBUMS = [
		{
			order: 2,
			name: "50 Cent",
			album: "Curtis",
			image: "/album-images/1.png",
		},
		{
			order: 3,
			name: "Snopp Dogg",
			album: "Algorithm",
			image: "/album-images/2.png",
		},
		{
			order: 4,
			name: "50 Cent",
			album: "Curtis",
			image: "/album-images/3.png",
		},
		{
			order: 5,
			name: "Snopp Dogg",
			album: "Algorithm",
			image: "/album-images/1.png",
		},
		{
			order: 6,
			name: "Snopp Dogg",
			album: "Algorithm",
			image: "/album-images/2.png",
		},
	];

	const renderAlbums = TOP10ALBUMS.map((album, index) => {
		return (
			<AlbumCard
				order={album.order}
				name={album.name}
				album={album.album}
				image={album.image}
				index={index}
			/>
		);
	});

	return <div className="flex gap-6">{renderAlbums}</div>;
};

export default MonthlyTopCard;
