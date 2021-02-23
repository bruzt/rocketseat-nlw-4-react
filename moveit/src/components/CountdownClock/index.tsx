import React, { useEffect, useState } from 'react';

import { Container, AiFillCaretRightIcon } from './styles';

export default function CountdownClock(){

	const [timeState, setTime] = useState(25 * 60);
	const [activeState, setActive] = useState(false);

	useEffect( () => {
		
		if(activeState && timeState > 0){
			setTimeout(() => {
				setTime(timeState - 1);
			}, 1000);
		}

	}, [activeState, timeState]);

	const minutes = Math.floor(timeState / 60);
	const seconds = timeState % 60;

	const minutesArray = String(minutes).padStart(2, '0').split('');
	const secondsArray = String(seconds).padStart(2, '0').split('');

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

			<button 
				type='button'
				onClick={() => setActive(true)}
			>
				<span>Iniciar um ciclo</span>
				<AiFillCaretRightIcon />
			</button>
			
		</Container>
	);
}
