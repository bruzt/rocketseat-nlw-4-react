import React, { createContext, useContext, useState, useEffect } from 'react';

import { useChallenges } from './ChallengesContext';

interface IProps {
    children: React.ReactNode;
}

interface IChallengesContext {
    minutes: number;
    seconds: number;
    hasFinishedState: boolean;
    isActiveState: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

const ChallengeContext = createContext({});

let countdownTimeout: NodeJS.Timeout;
const countdownTimeInSeconds = 0.1 * 60;

export function CountdownProvider({ children }: IProps){

	const { startNewChallenge } = useChallenges();

    const [timeState, setTime] = useState(countdownTimeInSeconds);
	const [isActiveState, setIsActive] = useState(false);
	const [hasFinishedState, setHasFinished] = useState(false);

    useEffect( () => {
		
		if(isActiveState && timeState > 0){

			setHasFinished(false);

			countdownTimeout = setTimeout(() => {
				setTime(timeState - 1);
			}, 1000);

		} else if(isActiveState && timeState == 0){
			
			setHasFinished(true);
			setIsActive(false);
			startNewChallenge();
		}

	}, [isActiveState, timeState]);

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
		clearTimeout(countdownTimeout); 
		setTime(countdownTimeInSeconds);
		setIsActive(false);
        setHasFinished(false);
	}

    const minutes = Math.floor(timeState / 60);
	const seconds = timeState % 60;

    return (
        <ChallengeContext.Provider 
            value={{ 
                minutes,
                seconds,
                hasFinishedState,
                isActiveState,
                startCountdown,
                resetCountdown,
            }}
        >
            {children}
        </ChallengeContext.Provider>
    )
}

export function useCountdown(){

    const context = useContext(ChallengeContext) as IChallengesContext;

    return context;
}
