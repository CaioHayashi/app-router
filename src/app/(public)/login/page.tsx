'use client'
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter()
	return (
		<div>
			<h3>Login</h3>
			<form onSubmit={(e) => {
                router.push('/authenticated')
                e.preventDefault()
            }}>
				<input type="text" />
				<input type="text" />
				<button>enviar</button>
			</form>
		</div>
	);
}
