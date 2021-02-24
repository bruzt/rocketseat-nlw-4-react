import React from 'react';

import { useChallenges } from '../../contexts/ChallengesContext';

import { Container } from './styles';

export default function ChallengeBox() {

	const { 
		activeChallengeState, 
		resetChallenge 
	} = useChallenges();

	return (
		<Container>

			{activeChallengeState ? (
				<div className="active">

					<header>
						<span>Ganhe {activeChallengeState.amount} xp</span>

						<hr/>
					</header>

					<main>
						<img src={`icons/${activeChallengeState.type}.svg`} alt={`${activeChallengeState.type}`} />

						<h2>Novo desafio</h2>

						<p>{activeChallengeState.description}</p>
					</main>

					<footer>
						<button 
							type='button'
							className='failed'
							onClick={resetChallenge}
						>
							<span>Falhei</span>
						</button>

						<button 
							type='button'
							className='completed'
						>
							<span>Completei</span>
						</button>
					</footer>

				</div>
			) : (
				<div className="not-active">
					<h2>
						<span>Inicie um ciclo</span>
						<span>Para receber desafios</span>
					</h2>

					<span>
						<img src='icons/arrowUpPlus.svg' alt="arrow up plus"/>
						<p>Avance de level completando os desafios.</p>
					</span>
				</div>
			)}
			
		</Container>
	);
}
