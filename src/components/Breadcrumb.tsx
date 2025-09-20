import Link from "next/link";

type Crumb = {
	name: string;
	href?: string; // last item won’t have href
};

type Props = {
	items: Crumb[];
};

function Breadcrumb({ items }: Props) {
	return (
		<nav aria-label="Breadcrumb" className="font-main hidden lg:block">
			<ol className="flex gap-2 text-[14px]">
				{items.map((item, idx) => (
					<li key={idx} className="flex items-center gap-2">
						{item.href ? (
							<Link href={item.href}>{item.name.toUpperCase()}</Link>
						) : (
							<span>{item.name.toUpperCase()}</span>
						)}
						{idx < items.length - 1 && (
							<span className="icon-[weui--arrow-outlined] text-xl" />
						)}
					</li>
				))}
			</ol>
		</nav>
	);
}

export default Breadcrumb;
