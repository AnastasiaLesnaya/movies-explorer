import React from 'react';
import student from '../../images/student.JPG';
import './AboutMe.css';

function AboutMe() {
	return (
		<section className='aboutMe'>
			<h2 className='aboutMe__title'>Студент</h2>
			<div className='aboutMe__container'>
				{/* фото и описание студента */}
				<div className='aboutMe__text-block'>
					<h3 className='aboutMe__name'>Анастасия Лесная</h3>
					<h4 className='aboutMe__job'>Начинающий фронтенд-разработчик, 25 лет</h4>
					<p className='aboutMe__text'>
						В школьные годы нравилось создавать простые сайты с помощью html и css. Уже во
						взрослой жизни решила прокачать свои навыки в этой сфере. Во время обучения в
						Яндекс Практикуме нашла работу в IT-компании (пока что на должности
						администратора проекта).
					</p>
					<a
						href='https://github.com/AnastasiaLesnaya'
						className='aboutMe__link'
						target='_blank'
						rel='noreferrer'
					>
						Github
					</a>
				</div>
				<img
					src={student}
					alt='Моя фотография'
					className='aboutMe__avatar'
				/>
			</div>
		</section>
	);
}

export default AboutMe;
