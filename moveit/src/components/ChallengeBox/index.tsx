import React from 'react';

import { Container } from './styles';

export default function ChallengeBox() {

	const hasActiveChallenge = true;

	return (
		<Container>

			{hasActiveChallenge ? (
				<div className="active">

					<header>
						<span>Ganhe 400 xp</span>

						<hr/>
					</header>

					<main>
						<img src="icons/exercise.svg" alt="exercise"/>

						<h2>Exercite-se</h2>

						<p>
							<span>Bora lá meu parça.</span>
							<span>Caminhe por 3 minutos e estique suas pernas</span>
							<span>para você ficar saudável</span>
						</p>
					</main>

					<footer>
						<button 
							type='button'
							className='failed'
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
						<span>Avance de level completando</span>
						<span>os desafios.</span>
					</span>
				</div>
			)}
			
		</Container>
	);
}
