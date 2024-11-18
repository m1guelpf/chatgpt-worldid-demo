import Auth0 from 'next-auth/providers/auth0'
import NextAuth, { type DefaultSession } from 'next-auth'

declare module 'next-auth' {
	interface Session {
		isWorldID: boolean
		user: DefaultSession['user']
	}
}

export const { auth, handlers, signIn, signOut } = NextAuth({
	providers: [
		Auth0({
			idToken: false,
		}),
	],
	callbacks: {
		authorized: async ({ auth }) => {
			// Logged in users are authenticated, otherwise redirect to login page
			return !!auth
		},
		async jwt({ token, profile }) {
			if (profile) token.sub = profile.sub!

			return token
		},
		async session({ session, token, user }) {
			return { ...session, isWorldID: token.sub?.startsWith('oauth2|worldcoin') ?? false }
		},
	},
})
