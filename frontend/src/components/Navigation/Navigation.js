import React from 'react';
import { Link } from 'react-router-dom';
import account from '../../images/account-btn.svg';
import './Navigation.css';
import CustomLink from './CustomLink';

function Navigation({ handleCloseMobileMenu }) {
	const links = [
		{ link: '/', title: 'Главная' },
		{ link: '/movies', title: 'Фильмы' },
		{ link: '/saved-movies', title: 'Сохранённые фильмы' },
	];

	const setActiveColorLink = ({ isActive }) =>
		isActive ? 'nav__link_active' : 'nav__link';

	return (
		<div className='nav__page-layout'>
			<div className='nav__overlay-container'></div>
			<div className='nav__menu'>
				<button
					className='nav__close-button'
					onClick={handleCloseMobileMenu}
				></button>
				<nav className='nav__links'>
					{links.map((link) => (
						<CustomLink
						    link={link.link}
							key={link.link}
							title={link.title}
							setActiveColorLink={setActiveColorLink}
							handleCloseMobileMenu={handleCloseMobileMenu}
						/>
					))}
				</nav>
				<Link
					to='/profile'
					className='nav__account-button'
					onClick={handleCloseMobileMenu}
				>
					<img
						src={account}
						alt='Кнопка входа в аккаунт'
					/>
				</Link>
			</div>
		</div>
	);
}

export default Navigation;
