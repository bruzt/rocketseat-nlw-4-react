import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyles from '../styles/GlobalStyles';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import { UserContextProvider } from '../contexts/UserContext';

export default function MyApp({ Component, pageProps }: AppProps) {

	return (
		<ChallengesProvider>
			<CountdownProvider>
				<UserContextProvider>

					<GlobalStyles />

					<Component {...pageProps} />

				</UserContextProvider>
			</CountdownProvider>
		</ChallengesProvider>
	);
}
