import { auth } from '@/lib/auth'
import { Session } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

const middleware = async (req: NextRequest) => {
	const session = await auth()

	if (session?.user && req.nextUrl.pathname == '/auth/login') {
		return NextResponse.redirect(new URL('/', req.url))
	}

	if (!session?.user && req.nextUrl.pathname != '/auth/login') {
		return NextResponse.redirect(new URL('/auth/login', req.url))
	}

	if (req.nextUrl.pathname == '/') {
		return NextResponse.redirect(new URL('/chat', req.url))
	}
}

export default middleware

export const config = {
	matcher: ['/auth/login', '/', '/chat'],
}
