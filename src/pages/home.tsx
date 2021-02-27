import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { useUser } from '../contexts/UserContext';

import HomePage from '../components/Home';

interface IProps {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
}

export default function Home({ challengesCompleted, currentExperience, level }: IProps) {

	const userContext = useUser();
	const router = useRouter();

	useEffect(() => {
		if (userContext.nameState.length === 0) router.replace('/');
	}, []);

	if (userContext.nameState.length === 0) {
		
		return null;

	} else {

		return (
			<HomePage
				challengesCompleted={challengesCompleted}
				currentExperience={currentExperience}
				level={level}
			/>
		);
	}
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

	const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

	return {
		props: {
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengesCompleted: Number(challengesCompleted),
		}
	}
}
