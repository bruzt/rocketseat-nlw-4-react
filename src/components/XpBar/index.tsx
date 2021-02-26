import React from 'react';

import { useChallenges } from '../../contexts/ChallengesContext';

import { Container } from './styles';

export default function XpBar() {

	const { 
		currentExperienceState,
		experienceToNextLevel
	} = useChallenges();

	const percentToNextLevel = Math.floor(currentExperienceState * 100) / experienceToNextLevel;

	return (
		<Container>

			<span>0 xp</span>
			
			<div className="bar">
				<div className="progress" style={{ width: `${percentToNextLevel}%` }}></div>
				<span className='current-xp' style={{ left: `${percentToNextLevel}%` }}>{currentExperienceState} xp</span>
			</div>

			<span>{experienceToNextLevel} xp</span>

		</Container>
	);
}
