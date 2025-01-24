import React from 'react';
import './styles/about.css';

function About() {
	return (
		<div className="about-container">
			<div className="about-header">
				<h1>Меня зовут Атай</h1>
				
			</div>

			<div className="about-content">
				<Block 
					name={"РФМШ"}
					date={"2021 - 2023"}
					place={"Астана"}
					points={["Средний балл: 4.86/5.00"]}
					cl={"block"}
				/>

				<Block
					name={"Nazarbayev University"}
					date={"2023 - Now"}
					place={"Астана"}
					points={["NUFYP", "BSc in Mathematics"]}
					cl={"block"}
				/>


				{/* <div className="about-section">
					<h2>Репетиторство</h2>
					<ul>
						<li>4+ лет  практики</li>
						<li>Поднял 15+ ученикам по предметам: алгебра, геометрия, физика, информатика.</li>
						<li>Занимался с ученикамы с гос. школ и спец. школ: РФМШ, Haileybury, БИЛ, НИШ.</li>
					</ul>
				</div>

				<div className="about-section">
					<h2>Опыт</h2>
					<ul>
						<li>4+ лет  практики</li>
						<li>Поднял 15+ ученикам по предметам: алгебра, геометрия, физика, информатика.</li>
						<li>Занимался с ученикамы с гос. школ и спец. школ: РФМШ, Haileybury, БИЛ, НИШ.</li>
					</ul>
				</div> */}
			</div>
		</div>
	);
};

const Block = ({ name, date, place, points, cl}) => {
	return (
		<div className={cl}>
			<h2 className="title">{name}</h2>
			<p className="details"> <span className='date'> {date}  </span> | {place}</p>
			<ul className="points">
				{points.map((point, index) => (
					<li key={index}>{point}</li>
				))}
			</ul>
		</div>
	);
};



export default About;
