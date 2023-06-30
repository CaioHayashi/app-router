import { Inter, Roboto } from "next/font/google";

export const inter = Inter({
	subsets: ["latin"],
	display: "swap"
});

export const roboto_mono = Roboto({
	subsets: ["latin"],
	display: "swap",
	weight: "400"
});

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
