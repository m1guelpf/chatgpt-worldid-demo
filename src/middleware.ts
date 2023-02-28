import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
	req => {
		if (req.nextauth.token && req.nextUrl.pathname == '/auth/login') {
			return NextResponse.redirect(new URL('/', req.url))
		}

		if (!req.nextauth.token && req.nextUrl.pathname != '/auth/login') {
			return NextResponse.redirect(new URL('/auth/login', req.url))
		}

		if (req.nextUrl.pathname == '/') {
			return NextResponse.redirect(new URL('/chat', req.url))
		}
	},
	{ callbacks: { authorized: () => true } }
)

export const config = {
	matcher: ['/auth/login', '/', '/chat'],
}
