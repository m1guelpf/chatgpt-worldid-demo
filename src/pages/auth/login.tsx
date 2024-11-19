import { signIn } from 'next-auth/react'
import OpenAIIcon from '@/components/icons/OpenAIIcon'

const Login = () => {
	return (
		<div className="min-h-screen flex justify-center items-center flex-col bg-gray-50 dark:bg-gray-800">
			<div className="w-96 flex flex-col justify-center items-center">
				<div className="mb-5">
					<OpenAIIcon className="w-10 h-10" />
				</div>
				<div className="mb-2 text-center">Welcome to ChatGPT</div>
				<div className="mb-4 text-center">Log in with your OpenAI account to continue</div>
				<div className="flex flex-row gap-3">
					<button onClick={() => signIn('auth0')} className="btn flex justify-center gap-2 btn-primary">
						Log in
					</button>
					<button onClick={() => signIn('auth0')} className="btn flex justify-center gap-2 btn-primary">
						Sign up
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login
