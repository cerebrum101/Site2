import './styles/about.css';
import React from 'react';
import { education, experience, tests, awards, projects } from './about-text';
import Block from './components/Block';
import AwardBlock from './components/AwardBlock';

function About() {
	return (
		<div className="about-container">
			<div className="about-header">
				<h1>Меня зовут Атай</h1>
			</div>

			<h2 className='about-subtitle'>Образование</h2>
			<div className="about-content-split">
				{education.map((item, index) => (
					<Block
						key={index}
						{...item}
						cl="block"
						ratio="auto"
					/>
				))}
			</div>

			<h2 className='about-subtitle'>Опыт и Некоммерческая Деятельность</h2>
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

			<h2 className='about-subtitle'>Тесты и Экзамены</h2>
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

			<h2 className='about-subtitle'>Проекты</h2>
			<div className="about-content">
				{education.map((item, index) => (
					<div
						key={index}
						{...item}
					>

					</div>
				))}
			</div>
		</div>
	);
}

export default About;
