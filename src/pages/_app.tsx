import '@/styles/styles.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<SessionProvider>
			<ThemeProvider attribute="class" enableSystem enableColorScheme>
				<Component {...pageProps} />
			</ThemeProvider>
		</SessionProvider>
	)
}

export default App
