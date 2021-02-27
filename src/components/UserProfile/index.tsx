import React from 'react';

import { useChallenges } from '../../contexts/ChallengesContext';
import { useUser } from '../../contexts/UserContext';

import { Container } from './styles';

export default function UserProfile() {

	const challengesContext = useChallenges();
	const userContext = useUser();

	return (
		<Container>
			
			<img src={userContext.photoUrlState} alt="foto"/>

			<div className="name-level">
				<span>{userContext.nameState}</span>
				<span>
					<img className='arrow' src='icons/arrowUp.svg' alt="arrow up"/> 
					&nbsp;Level {challengesContext.levelState}
				</span>
			</div>
			
		</Container>
	);
}
