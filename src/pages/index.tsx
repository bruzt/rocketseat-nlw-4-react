import React from 'react';
import { GetServerSideProps } from 'next';

import LoginPage from '../components/LoginPage';

interface IProps {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
}

export default function Home({ challengesCompleted, currentExperience, level }: IProps) {

	return (
		<>
		<LoginPage />
		{/* 
			<LoginPage 
				challengesCompleted={challengesCompleted} 
				currentExperience={currentExperience} 
				level={level}
			/>
	
		*/}
		</>
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
