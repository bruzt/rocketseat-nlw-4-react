import React, { useEffect, useState } from 'react';

import { Container, AiFillCaretRightIcon, AiOutlineCloseIcon, AiOutlineCheckCircleIcon } from './styles';

const countdownTime = 0.1 * 60;
let countdownTimeout: NodeJS.Timeout;

export default function CountdownClock(){

	const [timeState, setTime] = useState(countdownTime);
	const [isActiveState, setIsActive] = useState(false);
	const [hasFinishedState, setHasFinished] = useState(false);

	useEffect( () => {
		
		if(isActiveState && timeState > 0){

			setHasFinished(false);

			countdownTimeout = setTimeout(() => {
				setTime(timeState - 1);
			}, 1000);

		} else if(isActiveState && timeState == 0){
			console.log('finalizou')
			setHasFinished(true);
			setIsActive(false);
		}

	}, [isActiveState, timeState]);

	const minutes = Math.floor(timeState / 60);
	const seconds = timeState % 60;

	const minutesArray = String(minutes).padStart(2, '0').split('');
	const secondsArray = String(seconds).padStart(2, '0').split('');

	function abandonCicle(){
		clearTimeout(countdownTimeout); 
		setTime(countdownTime);
		setIsActive(false);
	}

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

			{hasFinishedState ? (
				<button 
					disabled={true}
					className='finished'
					type='button'
				>
					<span>Ciclo Encerrado <AiOutlineCheckCircleIcon /></span>
				</button>
			) : (
				isActiveState ? (
					<button 
						className='active'
						type='button'
						onClick={abandonCicle}
					>
						<span>Abandonar ciclo <AiOutlineCloseIcon /></span>
					</button>
				) : (
					<button 
						type='button'
						onClick={() => setIsActive(true)}
					>
						<span>Iniciar um ciclo <AiFillCaretRightIcon /></span>
					</button>
				)
			)}
			
		</Container>
	);
}
