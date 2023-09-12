import React from 'react';
import logo from "../../images/logo.svg"

import { Link } from 'react-router-dom';

const Default = () => {
	return (
		<header
			className='header'
			id='header'
		>
			<Link
				to='/'
				className='logo'
			>
				<img
					src={logo}
					alt='Логотип приложения'
				/>
			</Link>
			<div className='header__button-container'>
				<Link
					to='/signup'
					className='header__button'
				>
					Регистрация
				</Link>
				<Link
					to='/signin'
					className='header__button header__button-green'
				>
					Войти
				</Link>
			</div>
		</header>
	);
};

export default Default;
