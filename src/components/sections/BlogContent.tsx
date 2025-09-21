import Image from "next/image";
import blogImage from "@/assets/blog/blog-image.png";

type Props = {};

function BlogContent({}: Props) {
	const TAGS = ["Rap", "Lorem", "Dictum et", "Aenean"];
	const renderTags = TAGS.map((tag) => {
		return (
			<span
				key={tag}
				className="font-main text-[14px] lg:text-[16px] text-white px-4 py-2 bg-[#323232]"
			>
				{tag}
			</span>
		);
	});
	return (
		<div className="flex flex-col gap-10">
			<p
				className="font-condensed font-bold text-[40px] lg:text-[60px] leading-[89%]"
				id="title"
			>
				LOREM IPSUM DOLOR SIT AMET CONSECTETUR EDIPICING SIR ELIT
			</p>

			<p className="font-main text-[25px] font-bold leading-[104%]" id="desc">
				Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
				hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
				ultrices mauris.
			</p>

			<p className="font-main text-[14px] lg:text-[16px]" id="desc">
				Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
				hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
				ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
				Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur
				pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
				lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod
				erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem
				orci, mattis non efficitur id, ultricies vel nibh.
			</p>

			<Image className="w-full" src={blogImage} alt="blog" />

			<p className="font-main text-[14px] lg:text-[16px]" id="desc">
				Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
				lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id
				scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec
				felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui.
				Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non
				libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod
				neque. Nulla facilisi. Phasellus ultricies dignissim nibh ut cursus. Nam et quam
				sit amet turpis finibus maximus tempor eget augue. Aenean at ultricies lorem. Sed
				egestas ligula tortor, sit amet mattis ex feugiat non. Duis purus diam, dictum et
				ante at, commodo iaculis urna. Aenean lacinia, nisl id vehicula condimentum, enim
				massa.
			</p>

			<p className="font-main text-[14px] lg:text-[16px]" id="desc">
				Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
				lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id
				scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec
				felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui.
				Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non
				libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod
				neque. Nulla facilisi. Phasellus ultricies dignissim nibh ut cursus. Nam et quam
				sit amet turpis finibus maximus tempor eget augue. Aenean at ultricies lorem. Sed
				egestas ligula tortor, sit amet mattis ex feugiat non. Duis purus diam, dictum et
				ante at, commodo iaculis urna. Aenean lacinia, nisl id vehicula condimentum, enim
				massa.
			</p>
			<div className="flex gap-4">{renderTags}</div>
		</div>
	);
}

export default BlogContent;
