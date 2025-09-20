import Breadcrumb from "@/components/Breadcrumb";

type Props = {
	params: Promise<{ slug: string }>;
};

export default async function page({ params }: Props) {
	const { slug } = await params;
	return (
		<div>
			<Breadcrumb
				items={[
					{ name: "ANA SAYFA", href: "/" },
					{ name: "Blog", href: "/blog" },
					{ name: slug },
				]}
			/>
		</div>
	);
}
