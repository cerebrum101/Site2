import React from 'react';
import { tests, awards } from '../about-text';
import AwardBlock from '../components/AwardBlock';

function AwardsPage() {
	return (
		
		<div className="about-container">
			<h1 className='text-center text-4xl font-bold text-white mb-10'>Достижения</h1>
			<h2 className='about-subtitle'>Тесты</h2>
			<div className="about-content tests">
				{tests.map((test, index) => (
					<div 
						key={index}
						className="small-block text-center flex flex-wrap justify-center items-center bg-[#1a1a1a] rounded-md text-white p-4"
						
					>
						{test}
					</div>
				))}
			</div>

			<h2 className='about-subtitle'>Достижения и награды</h2>
			<div className="awards-grid">
				{awards.map((award, index) => (
					<AwardBlock
						key={index}
						{...award}
					/>
				))}
			</div>
		</div>
	);
}

export default AwardsPage;
