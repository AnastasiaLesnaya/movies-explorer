import React, { useContext } from 'react';
import './FilterCheckbox.css';
import MoviesContext from '../../contexts/MoviesContext';
import SavedContext from '../../contexts/SavedContext';

function FilterCheckbox({ onFilterMovies, toggleShort, isSaved }) {
	const { setToggleShort, filterDuration, setFilteredMovies, allMovies } =
		useContext(isSaved ? SavedContext : MoviesContext);

	return (
		<form className='filter'>
			<input
				className='filter__checkbox'
				type='checkbox'
				onChange={() =>
					onFilterMovies(
						setToggleShort,
						toggleShort,
						filterDuration,
						setFilteredMovies,
						allMovies
					)
				}
				checked={toggleShort}
			></input>
			<span className='filter__checkbox-title'>Короткометражки</span>
		</form>
	);
}

export default FilterCheckbox;
