import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyles from '../styles/GlobalStyles';

import { ChallengesProvider } from '../contexts/ChallengesContext';

export default function MyApp({ Component, pageProps }: AppProps) {

	return (
		<>
			<GlobalStyles />
			
			<ChallengesProvider>
				<Component {...pageProps} />
			</ChallengesProvider>
		</>
	);
}
