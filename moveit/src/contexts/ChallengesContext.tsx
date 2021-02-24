import React, { createContext, useContext, useState } from 'react';

import challenges from '../../challenges.json';

interface IProps {
    children: React.ReactNode;
}

interface IChallengesContext {
    levelState: number;
    levelUp: () => void;
    currentExperienceState: number;
    challengesCompletedState: number;
    startNewChallenge: () => void;
    activeChallengeState: IChallenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
}

interface IChallenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

const ChallengeContext = createContext({});

export function ChallengesProvider({ children }: IProps){

    const [levelState, setLevel] = useState(1);
    const [currentExperienceState, setCurrentExperience] = useState(55);
    const [challengesCompletedState, setChallengesCompleted] = useState(0);
    const [activeChallengeState, setActiveChallenge] = useState<IChallenge>(null);

    const experienceToNextLevel = Math.pow((levelState + 1) * 4, 2);

    function levelUp(){
        setLevel(levelState + 1);
    }

    function startNewChallenge(){
        
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

        setActiveChallenge(challenges[randomChallengeIndex] as IChallenge);
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    return (
        <ChallengeContext.Provider 
            value={{ 
                levelState,
                levelUp,
                currentExperienceState,
                challengesCompletedState,
                startNewChallenge,
                activeChallengeState,
                resetChallenge,
                experienceToNextLevel
            }}
        >
            {children}
        </ChallengeContext.Provider>
    )
}

export function useChallenges(){

    const context = useContext(ChallengeContext) as IChallengesContext;

    return context;
}