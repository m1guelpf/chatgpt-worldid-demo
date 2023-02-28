import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/apple-touch-icon.png" />

				<link rel="preload" href="/fonts/Sohne-Buch.otf" as="font" crossOrigin="" />
				<link rel="preload" href="/fonts/Sohne-Halbfett.otf" as="font" crossOrigin="" />
				<link rel="preload" href="/fonts/SohneMono-Buch.otf" as="font" crossOrigin="" />
				<link rel="preload" href="/fonts/Signifier-Regular.otf" as="font" crossOrigin="" />
				<link rel="preload" href="/fonts/SohneMono-Halbfett.otf" as="font" crossOrigin="" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
