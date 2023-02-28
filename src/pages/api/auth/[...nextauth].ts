import NextAuth from 'next-auth'
import Auth0Provider from 'next-auth/providers/auth0'

export default NextAuth({
	pages: { signIn: '/auth/login' },
	callbacks: { redirect: ({ url }) => url },
	providers: [
		Auth0Provider({
			clientId: process.env.AUTH0_CLIENT_ID!,
			issuer: process.env.NEXT_PUBLIC_AUTH0_ISSUER,
			clientSecret: process.env.AUTH0_CLIENT_SECRET!,
		}),
	],
})
