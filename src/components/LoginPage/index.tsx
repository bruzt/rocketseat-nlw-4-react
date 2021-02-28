import React, { FormEvent, useEffect, useState } from 'react';

import { useUser } from '../../contexts/UserContext';

import { Container } from './styles';

export default function LoginPage() {

	const userContext = useUser();

	const [usernameState, setUsername] = useState('');
	const [isValidUserState, setIsValidUser] = useState(false);

	useEffect( () => {

		if(usernameState.length > 3) setIsValidUser(true);
		else setIsValidUser(false);

	}, [usernameState]);

	async function onSubmit(event: FormEvent){

		event.preventDefault();

		await userContext.fetchGitUser(usernameState);
	}

	return (
		<Container>

			<img src="bigLogo.svg" alt="big logo" className="big-logo" />

			<form>
				<img src="logo-full.svg" alt="logo full"/>

				<h2>Bem-vindo</h2>

				<div className='text-container'>
					<img src="/icons/githubIcon.svg" alt="logo github" />
					<span>Faça login com seu Github para começar</span>
				</div>

				<div className="input-container">
					<input 
						type="text" 
						placeholder='Digite seu username' 
						value={usernameState}
						onChange={(event) => setUsername(event.target.value)}
					/>
					<button 
						type='submit' 
						onClick={onSubmit}
						disabled={! isValidUserState}
					>
						<img src="icons/arrowRight.svg" alt="arrow right"/>
					</button>
				</div>
			</form>
		</Container>
	);
}
