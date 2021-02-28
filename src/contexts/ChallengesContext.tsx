import React, { createContext, useContext, useEffect, useState } from 'react';
import cookies from 'js-cookie';

import challenges from '../../challenges.json';

import LevelUpModal from '../components/LevelUpModal';

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
    completeChallenge: () => void;
    setCookiesData: (level: number, currentExperience: number, challengesCompleted: number, username: string) => void;
    showLevelUpModalState: boolean;
    setShowLevelUpModal: React.Dispatch<boolean>;
}

interface IChallenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

const ChallengeContext = createContext({});

export function ChallengesProvider({ children }: IProps){

    const [levelState, setLevel] = useState(1);
    const [currentExperienceState, setCurrentExperience] = useState(0);
    const [challengesCompletedState, setChallengesCompleted] = useState(0);
    const [activeChallengeState, setActiveChallenge] = useState<IChallenge>(null);
    const [showLevelUpModalState, setShowLevelUpModal] = useState(false);

    const experienceToNextLevel = Math.pow((levelState + 1) * 4, 2);

    useEffect( () => {
        cookies.set('level', String(levelState));
        cookies.set('currentExperience', String(currentExperienceState));
        cookies.set('challengesCompleted', String(challengesCompletedState));

    }, [levelState, currentExperienceState, challengesCompletedState]);

    useEffect( () => {
        Notification.requestPermission();
    }, []);

    function setCookiesData(level: number, currentExperience: number, challengesCompleted: number, username: string){
        setLevel(level);
        setCurrentExperience(currentExperience);
        setChallengesCompleted(challengesCompleted);
    }

    function levelUp(){
        setLevel(levelState + 1);
        setShowLevelUpModal(true);
    }

    function startNewChallenge(){

        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

        const challenge = challenges[randomChallengeIndex]
        
        setActiveChallenge(challenge as IChallenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio 💪', {
                body: `Valendo ${challenge.amount} xp`
            });
        }
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completeChallenge(){

        if(!activeChallengeState) return;

        const { amount } = activeChallengeState;

        let finalExperience = currentExperienceState + amount;

        if(finalExperience >= experienceToNextLevel) {

            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompletedState + 1);
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
                experienceToNextLevel,
                completeChallenge,
                setCookiesData,
                showLevelUpModalState,
                setShowLevelUpModal
            }}
        >

            <LevelUpModal level={levelState} showModal={showLevelUpModalState} setShowModal={setShowLevelUpModal} />

            {children}
            
        </ChallengeContext.Provider>
    )
}

export function useChallenges(){

    const context = useContext(ChallengeContext) as IChallengesContext;

    return context;
}
