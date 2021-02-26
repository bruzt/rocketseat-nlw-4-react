import React from 'react';

import { Container } from './styles';

interface IProps {
	level: number;
	showModal: boolean;
	setShowModal: React.Dispatch<boolean>;
}

export default function LevelUpModal({ level, showModal, setShowModal }: IProps) {

	function closeModal(){
		setShowModal(false);
	}

	if(! showModal){

		return null;

	} else {

		return (
			<Container>
				
				<div className="card">
					
					<header>
						<button type='button' onClick={closeModal}>
							<img src="/icons/x.svg" alt="exit"/>
						</button>
					</header>
					
					<div className="level">
						<span>{level}</span>
					</div>
	
					<h2>Parabéns</h2>
	
					<p>Você alcançou um novo level.</p>
	
					{/* 
						<footer>
							<a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
								<span>Compartilhar no Twitter</span>
								<img src="/icons/twitter.svg" alt="twitter" />
							</a>
						</footer>
					*/}
				</div>
	
			</Container>
		);
	}
}
