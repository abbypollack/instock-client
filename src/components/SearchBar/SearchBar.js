import React from 'react';
import search from '../../assets/icons/search-24px.svg';
import './SearchBar.scss';

const SearchBar = () => {
    return (
        <div className="search-container">
            <input type="text" className="search-container__input" placeholder="Search..." />
            <img className="search-container__icon" src={search}></img>
        </div>
    );
};

export default SearchBar;