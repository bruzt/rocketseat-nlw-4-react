import React from 'react';
import Head from 'next/head';

import XpBar from '../XpBar';
import UserProfile from '../UserProfile';
import CountdownClock from '../CountdownClock';
import ChallengeBox from '../ChallengeBox';

import { useChallenges } from '../../contexts/ChallengesContext';

import { Container } from './styles';

export default function Home(){

	const { challengesCompletedState } = useChallenges();

	return (
		<Container>
			<Head>
				<title>Início | Move.it</title>
			</Head>
			
			<div className="panel">

				<XpBar />

				<div className="left-right-container">

					<section className="left-container">

						<UserProfile />
						
						<div className="challenges-container">

							<div className="complete-challenges">
								<span>Desafios completos</span>
								<span>{challengesCompletedState}</span>
							</div>

							<hr/>
						</div>

						<CountdownClock />

					</section>

					<section className="right-container">

						<ChallengeBox />
						
					</section>

				</div>
			</div>

		</Container>
	);
}
