import React from 'react';

import { useCountdown } from '../../contexts/CountdownContext';

import { Container, AiFillCaretRightIcon, AiOutlineCloseIcon, AiOutlineCheckCircleIcon } from './styles';

export default function CountdownClock(){

	const countdownContext = useCountdown();
	
	const minutesArray = String(countdownContext.minutes).padStart(2, '0').split('');
	const secondsArray = String(countdownContext.seconds).padStart(2, '0').split('');

	return (
		<Container>
			
			<div className="countdown">

				<div className="number-container">
					<span>{minutesArray[0]}</span>
				</div>
				<div className="number-container">
					<span>{minutesArray[1]}</span>
				</div>
				
				<span className='colon'>:</span>
				
				<div className="number-container">
					<span>{secondsArray[0]}</span>
				</div>
				<div className="number-container">
					<span>{secondsArray[1]}</span>
				</div>

			</div>

			{countdownContext.hasFinishedState ? (
				<button 
					disabled={true}
					className='finished'
					type='button'
				>
					<span>Ciclo Encerrado <AiOutlineCheckCircleIcon /></span>
				</button>
			) : (
				countdownContext.isActiveState ? (
					<button 
						className='active'
						type='button'
						onClick={countdownContext.resetCountdown}
					>
						<span>Abandonar ciclo <AiOutlineCloseIcon /></span>
					</button>
				) : (
					<button 
						type='button'
						onClick={countdownContext.startCountdown}
					>
						<span>Iniciar um ciclo <AiFillCaretRightIcon /></span>
					</button>
				)
			)}
			
		</Container>
	);
}
