import arrow from "../../images/arrow.svg";

const CustomLink = ({link, title}) => {
	return (
		<a
			href={link}
			className='portfolio__link'
			target='_blank'
			rel='noreferrer'
		>
			<p className='portfolio__description'>{title}</p>
			<img
				className='portfolio__image'
				src={arrow}
				alt='Стрелка для ссылки'
			/>
		</a>
	);
};

export default CustomLink;
