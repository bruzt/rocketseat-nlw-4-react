import React from 'react';
import { GetServerSideProps } from 'next';

import Landing from '../components/Landing';

interface IProps {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
}

export default function Home({ challengesCompleted, currentExperience, level }: IProps) {

	return (
		<Landing 
			challengesCompleted={challengesCompleted} 
			currentExperience={currentExperience} 
			level={level}
		/>
	);
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
