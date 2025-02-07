import './styles/about.css';
import React, { useState, useEffect } from 'react';
import logoOlscience from './assets/olscience.png';
import logoOlscienceSm from './assets/olscience_sm.png';
import logoAmCorn from './assets/americancorners.png';
// import logoAmCornSm from './assets/americancorners_sm.png';
import logoBeyond from './assets/beyond.png';
import logoBeyondSm from './assets/bc_sm.png';
import logoAPHB from './assets/aphb.png';
import logoAPHBSm from './assets/aphb_sm.svg';
import logoNSPM from './assets/nspm.png';
import logoCabo from './assets/cabo.png';
import logoCaboSm from './assets/cabo_sm.png';
import logoFizmatAcademy from './assets/fizmatacademy.png';
import logoFizmatAcademySm from './assets/fizmatacademy_sm.png';
import logoNU from './assets/nu.png';













const tests = [
	'SAT 1480',
	'IELTS 7.5',
	'NUET 181',
	'ЕНТ физ-мат 120',
	'ЕНТ инф-мат 118'
]

const Block = ({ name, date, place, points, cl, coverImg, altImg, scale = 1, ratio = '3/1', isSquareBlock = false }) => {
	const [isVisible, setIsVisible] = useState(false);
	// const [currentImage, setCurrentImage] = useState(coverImg);

	const handleClick = () => {
        setIsVisible(!isVisible);
    };


	
	return (
		<div className={cl} onClick={handleClick}
		
		style={{ 
			aspectRatio: window.innerWidth > 780 ? ratio : 'auto',
			overflow: 'hidden',
			position: 'relative',
			minHeight: window.innerWidth <= 780 ? '200px' : 'auto',
			backgroundColor: isVisible ? '#1a1a1a' : (window.innerWidth <= 780 ? '#242424': '#1a1a1a'),
			boxShadow: isVisible ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none'
		}}
		
		>
			{!isVisible ? (
				<img 

				src={coverImg} 
                alt={''} 
                className='cover-image'
                style={{ transform: `translate(-50%, -50%) scale(${scale})` }} // Modify transform
				/>
			) : (
				<> 
				<h2 className="title">{name}</h2>
				<p className="details"> <span className='date'> {date}  </span> | {place}</p>
				<ul className="points">
					{points.map((point, index) => (
						<li key={index}>{point}</li>
					))}
				</ul>
				</>
			)}
			

		</div>
	);
};

function About() {
	const newLocal = <Block
		name={"Mentorship Club"}
		date={"2022 - 2023"}
		place={"Оффлайн"}
		points={[
			'Провел более 100 часов занятий по математике и физике для 20+ учеников из разных школ.',
		]}
		cl={"block"} />;
	return (
		<div className="about-container">
			<div className="about-header">
				<h1>Меня зовут Атай</h1>
			</div>

			<h2 className='about-subtitle'>Образование</h2>
			<div className="about-content-split">
				
				<Block 
					name={"РФМШ"}
					date={"2021 - 2023"}
					place={"Астана"}
					points={["Средний балл: 4.86/5.00"]}
					cl={"block"}

					coverImg={logoNSPM}

					ratio='1/1'

					isSquareBlock = {true}
				/>

				<Block
					name={"Nazarbayev University"}
					date={"2023 - Now"}
					place={"Астана"}
					points={["NUFYP", "BSc in Mathematics"]}
					cl={"block"}

					coverImg={logoNU}

					ratio='1/1'

					isSquareBlock = {true}

				/>

			</div>


			<h2 className='about-subtitle'>Опыт и Некоммерческая Деятельность</h2>
			<div className="about-content">

				<Block
					name={"OLSCIENCE CIRCLES"}
					date={"Май - Ноябрь 2023"}
					place={"Гибридный Формат"}
					points={['Руководитель математического направления для 6-9 классов',
						"Управлял командой из 10 менторов",
						"более 30 уроков, 60+ часов онлайн-обучения для 50 учеников",
						"2 офлайн-олимпиадных лагеря по теории чисел и комбинаторике для 70+ учеников ",
					]}
					cl={"block"}
					coverImg={logoOlscience}
					
					// scale={0.8}
				
				/>

				<Block
					name={"Makerspace Astana Math Club"}
					date={"Август - Октябрь 2022"}
					place={"Онлайн"}
					points={[
						"Сотрудничал с American Corner Astana", 
						"12-недельная программа для 6–9 классов по олимпиадной математике",
						'Разработал учебную программу, материалы для курса и домашние задания',
						'Ученики прокачались с 0 до уровня Областной Олимпиады 9 класса.',
						
					]}
					cl={"block"}
					coverImg={logoAmCorn}

				/>

				<Block 
					name={"Beyond Curriculum Public Foundation"}
					date={"Март 2024 - н.в. "}
					place={"Гибридный Формат"}
					points={[
						"Действующий Член Фонда",
						"Член оргкомитета в 4 конкурсах международного уровня",
						'Организационный менеджер мероприятий',

					]}
					cl={"block"}
					coverImg={logoBeyond}
					
				/>

				<Block
					name={"Fizmat Academy"}
					date={"Июнь 2023 "}
					place={"Оффлайн"}
					points={[
						"Ментор, Волонтер",
						'Обучил ключевым математическим и логическим темам для вступительных в РФМШ, НИШ и БИЛ.',
						"Провел обучение  60+ учащихся 6-х классов в 4 группах",
						'48+ часов занятий за 2 недели',
						'Более 50% учеников добились желаемого результата',
					]}
					cl={"block"}
					coverImg={logoFizmatAcademy}

					// scale={1}
				/>

			</div>

			<h2 className='about-subtitle'>Тесты и Экзамены</h2>
			<div className="about-content tests" >
				{
					tests.map((test, index) => (
						<div 
						className="block small-block"
						key={index}
						>
							{test}
						</div>
					))
				}

			</div>

		</div>


	);
};







export default About;
