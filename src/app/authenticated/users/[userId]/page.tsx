import { getUserById } from "../services/get-users-by-id";



export default async function UserDetailsPage({
	params
}: {
	params: { userId: string };
}) {
	const user = await getUserById(params.userId);

	return (
		<>
			<h2>
				Usuário: {user.first_name} {user.last_name}
			</h2>
			<img
				src={user.avatar}
				alt={`image-${(user.first_name, user.last_name)}`}
			/>
			<span>{user.email}</span>

			<hr />
		</>
	);
}
