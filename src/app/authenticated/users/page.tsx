import Link from "next/link";
import getUsers from "./services/get-users";

export const metadata = {
	title: "usuários"
};

export default async function UsersPage() {
	const users = await getUsers();

	return (
		<div>
			<h3>Usuários</h3>
			<ul>
				{users.map((user: any) => (
					<li key={user.id}>
						<Link href={`/authenticated/users/${user.id}`}>
							<div>
								{user.first_name}
								{user.last_name}({user.email})
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
