import Breadcrumb from "@/components/Breadcrumb";

type Props = {
	params: { slug: string };
};

function page({ params }: Props) {
	console.log(params);
	return (
		<div>
			<Breadcrumb
				items={[
					{ name: "ANA SAYFA", href: "/" },
					{ name: "Blog", href: "/blog" },
					{ name: params.slug },
				]}
			/>
		</div>
	);
}

export default page;
