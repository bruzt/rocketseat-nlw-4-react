import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

import foto from '../../assets/foto.jpg';
import arrowUp from '../../assets/arrowUp.svg';
import arrowUpPlus from '../../assets/arrowUpPlus.svg';

import { Container } from './styles';

export default function Landing(){

	return (
		<Container>
			
			<div className="panel">

				<div className="xp-bar">
					<span>0 xp</span>
					<div className="bar">
						<div className="progress"></div>
					</div>
					<span>600 xp</span>
				</div>

				<div className="left-right-container">

					<div className="left-container">

						<div className="user">

							<img src={foto} alt="foto"/>

							<div className="name-level">
								<span>Bruno Zutim</span>
								<span>
									<img className='arrow' src={arrowUp} alt="arrow up"/> 
									&nbsp;Level 1
								</span>
							</div>
						</div>
						<div className="challenges-container">

							<div className="complete-challenges">
								<span>Desafios completos</span>
								<span>00</span>
							</div>

							<hr/>
						</div>

						<div className="countdown-clock">

							<div className="digits number">
								<span>2</span>
							</div>
							<div className="digits number">
								<span>5</span>
							</div>
							<div className="digits">
								<span>:</span>
							</div>
							<div className="digits number">
								<span>0</span>
							</div>
							<div className="digits number">
								<span>0</span>
							</div>
						</div>

						<button type='button'>
							<span>Iniciar um ciclo</span>
							<AiFillCaretRight size={24} />
						</button>
					</div>

					<div className="right-container">

						<div className="init-cicle">
							<h2>
								<span>Inicie um ciclo</span>
								<span>Para receber desafios</span>
							</h2>


							<span>
								<img src={arrowUpPlus} alt="arrow up plus"/>
								<span>Avance de level completando</span>
								<span>os desafios.</span>
							</span>
						</div>
					</div>
					
				</div>
			</div>

		</Container>
	);
}
