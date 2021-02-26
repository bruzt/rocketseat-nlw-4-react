import React, { useEffect } from 'react';
import Head from 'next/head';

import XpBar from '../XpBar';
import UserProfile from '../UserProfile';
import CountdownClock from '../CountdownClock';
import ChallengeBox from '../ChallengeBox';

import { useChallenges } from '../../contexts/ChallengesContext';

import { Container } from './styles';

interface IProps {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
}

export default function Landing({ challengesCompleted, currentExperience, level}: IProps){

	const { challengesCompletedState, setCookiesData } = useChallenges();

	useEffect( () => {
		if(challengesCompleted != null && currentExperience != null && level != null) {
			
			setCookiesData(level, currentExperience, challengesCompleted);
		}
	}, []);

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
