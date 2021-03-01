import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

import LoginPage from '../components/LoginPage';
import { useChallenges } from '../contexts/ChallengesContext';
import { useUser } from '../contexts/UserContext';

interface IProps {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
	username: string;
}

export default function Home({ challengesCompleted, currentExperience, level, username }: IProps) {

	const challengesContext = useChallenges();
	const userContext = useUser();

	const [loginState, setLogin] = useState(false);

	useEffect( () => {
		if(challengesCompleted != null && currentExperience != null && level != null && username != null) {
			
			userContext.fetchGitUser(username);
			challengesContext.setCookiesData(level, currentExperience, challengesCompleted);
			
			setTimeout( () => {
				setLogin(true);
			}, 1000)

		} else {
			setLogin(true);
		}
	}, []);

	if(loginState){

		return <LoginPage />;

	} else {
		return null;
	}
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

	const { 
		level, 
		currentExperience, 
		challengesCompleted,
		username 
	} = ctx.req.cookies;

	return {
		props: {
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengesCompleted: Number(challengesCompleted),
			username: username == null ? null : username,
		}
	}
}
