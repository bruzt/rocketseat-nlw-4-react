import React from 'react';

import { useChallenges } from '../../contexts/ChallengesContext';

import { Container } from './styles';

export default function UserProfile() {

	const challengesContext = useChallenges();

	return (
		<Container>
			
			<img src='https://avatars.githubusercontent.com/u/12144828?s=460&u=c6f46aa919cc4b69ffc4bdc583905fa279930a95&v=4' alt="foto"/>

			<div className="name-level">
				<span>Bruno Zutim</span>
				<span>
					<img className='arrow' src='icons/arrowUp.svg' alt="arrow up"/> 
					&nbsp;Level {challengesContext.levelState}
				</span>
			</div>
			
		</Container>
	);
}
