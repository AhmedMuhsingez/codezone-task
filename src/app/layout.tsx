import type { Metadata } from "next";
import { Saira, Saira_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SizeIndicator from "@/components/dev/SizeIndicator";

const saira = Saira({
	variable: "--font-saira",
	subsets: ["latin"],
});

const sairaCondensed = Saira_Condensed({
	variable: "--font-saira-condensed",
	subsets: ["latin"],
	weight: "700",
});

export const metadata: Metadata = {
	title: "Codezone Coding Task",
	description: "Codezone Coding Task - Ahmed Muhsingez",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="tr">
			<body className={`${saira.variable} ${sairaCondensed.variable} antialiased`}>
				<SizeIndicator />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
