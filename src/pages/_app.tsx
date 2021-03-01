import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '../styles/GlobalStyles';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import { UserContextProvider } from '../contexts/UserContext';

export default function MyApp({ Component, pageProps }: AppProps) {

	return (
		<ChallengesProvider>
			<CountdownProvider>
				<UserContextProvider>

					<Head>
						<meta httpEquiv="X-UA-Compatible" content="text/html;charset=UTF-8"/>
						<meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
						
						<title>Move.it</title>

						<link rel="manifest" href="/manifest.json" />
						<link href='/favicon.png' rel='icon' type='image/png' sizes='64x64' />
						<link rel="apple-touch-icon" href="/favicon.png"></link>
						<meta name="theme-color" content="#5965e0"/>
					</Head>

					<GlobalStyles />

					<Component {...pageProps} />

				</UserContextProvider>
			</CountdownProvider>
		</ChallengesProvider>
	);
}
