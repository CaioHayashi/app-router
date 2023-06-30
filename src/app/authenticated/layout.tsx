import Link from "next/link";
import { inter } from "../layout";

export const metadata = {
	title: "Home - Next 13"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body className={inter.className}>
				<h2>Next 13 - (Authenticated)</h2>
				<ul>
					<li>
						<Link href="/authenticated">Home</Link>
					</li>
					<li>
						<Link href="/authenticated/users">Usuários</Link>
					</li>
					<li>
						<Link href="/login">Login</Link>
					</li>
				</ul>
				<hr />
				{children}
			</body>
		</html>
	);
}