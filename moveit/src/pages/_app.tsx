import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyles from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }: AppProps) {

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet" />

			<GlobalStyles />

			<Component {...pageProps} />
		</>
	);
}
