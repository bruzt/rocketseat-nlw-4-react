import React from 'react';
import Head from 'next/head';

import XpBar from '../XpBar';
import UserProfile from '../UserProfile';
import CountdownClock from '../CountdownClock';

import { Container } from './styles';

export default function Landing(){

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
								<span>00</span>
							</div>

							<hr/>
						</div>

						<CountdownClock />

					</section>

					<section className="right-container">

						<div className="init-cicle">
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
					</section>

				</div>
			</div>

		</Container>
	);
}
