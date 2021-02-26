import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyles from '../styles/GlobalStyles';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function MyApp({ Component, pageProps }: AppProps) {

	return (
		<ChallengesProvider>
			<CountdownProvider>

				<GlobalStyles />

				<Component {...pageProps} />

			</CountdownProvider>
		</ChallengesProvider>
	);
}
