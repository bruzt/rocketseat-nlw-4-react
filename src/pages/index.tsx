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
	name: string;
}

export default function Home({ challengesCompleted, currentExperience, level, username, name }: IProps) {

	const challengesContext = useChallenges();
	const userContext = useUser();

	const [delayedLoginState, setDelayedLogin] = useState(false);

	useEffect( () => {
		if(username != null) {
			
			userContext.setName(name);
			userContext.fetchGitUser(username);
			challengesContext.setCookiesData(level, currentExperience, challengesCompleted);
			
			setTimeout( () => {
				setDelayedLogin(true);
			}, 1000);

		} else {
			setDelayedLogin(true);
		}
	}, []);

	if(delayedLoginState){

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
		username,
		name
	} = ctx.req.cookies;

	return {
		props: {
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengesCompleted: Number(challengesCompleted),
			username: username == null ? null : username,
			name: name == null ? null : username,
		}
	}
}
