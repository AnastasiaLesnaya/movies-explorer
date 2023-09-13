import React from 'react';
import './Techs.css';

function Techs() {
	const techbologies = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

	return (
		<section
			className='techs'
			id='techs'
		>
			<div className='techs__container'>
				<h2 className='techs__title'>Технологии</h2>
				<h3 className='techs__subtitle'>7 технологий</h3>
				<p className='techs__description'>
					На курсе веб-разработки мы освоили технологии, которые применили в дипломном
					проекте.
				</p>
				<ul className='techs__list'>
          {techbologies.map(item => (
            <li key={item} className='techs__list-item'>{item}</li>
          ))}
				</ul>
			</div>
		</section>
	);
}

export default Techs;
