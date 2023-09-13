import { NavLink } from "react-router-dom";

const CustomLink = ({setActiveColorLink, handleCloseMobileMenu, link, title}) => {
	return (

			<NavLink
				to={link}
				className={setActiveColorLink}
				onClick={handleCloseMobileMenu}
			>
                {title}
            </NavLink>

	);
};

export default CustomLink;
