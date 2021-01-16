import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {ThemeContext} from "../context/ThemeContext";

const Search = ({searchTerm, setSearchTerm}) => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      style={{background: `${theme.bg}`, color: `${theme.text}`}}
      className='p-4 rounded mb-12 flex items-center shadow-sm lg:w-2/6'
    >
      <FontAwesomeIcon icon={faSearch} className='ml-3 mr-6' />
      <input
        style={{background: `${theme.bg}`}}
        type='search'
        value={searchTerm}
        placeholder='Search for a country...'
        className='w-full outline-none'
        onChange={e => setSearchTerm(e.target.value)}
        aria-label='Search countries'
      />
    </div>
  );
};

export default Search;
