import React from 'react';
import { experience } from '../about-text';
import Block from '../components/Block';
import '../styles/about.css';

function ExperiencePage() {
	return (
		<div className="about-container">

			<h1 className='text-center text-4xl font-bold text-white mb-10'>Опыт и Некоммерческая Деятельность</h1>
			<div className="about-content">
				{experience.map((item,index) => (
					<Block
						key={index}
						{...item}
						cl="block"
						text={item.text}
					/>
				))}
			</div>

			
		</div>
	);
}

export default ExperiencePage;
