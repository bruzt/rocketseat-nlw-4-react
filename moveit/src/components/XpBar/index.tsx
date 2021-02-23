import React from 'react';

import { Container } from './styles';

export default function XpBar() {

	return (
		<Container>

			<span>0 xp</span>
			
			<div className="bar">
				<div className="progress" style={{ width: '60%' }}></div>
				<span className='current-xp' style={{ left: '60%' }}>360 xp</span>
			</div>

			<span>600 xp</span>

		</Container>
	);
}
