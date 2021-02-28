import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useUser } from '../contexts/UserContext';

import HomePage from '../components/Home';

export default function Home() {

	const userContext = useUser();
	const router = useRouter();

	useEffect(() => {
		if (userContext.nameState.length === 0) router.replace('/');
	}, []);

	if (userContext.nameState.length === 0) {
		
		return null;

	} else {

		return <HomePage />;
	}
}
