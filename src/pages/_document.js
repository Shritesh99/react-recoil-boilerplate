import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>...</title>
				<Link rel="icon" href="/favicon.ico" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
