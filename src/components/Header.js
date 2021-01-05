import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {ThemeContext} from "../context/ThemeContext";
import {Link} from "react-router-dom";

const Header = () => {
  const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <header
      style={{
        background: `${theme.bg}`,
        color: `${theme.text}`,
      }}
      className='shadow-sm py-5 sticky top-0 w-full'
    >
      <div className='w-11/12 mx-auto max-w-7xl flex justify-between'>
        <h1 className='text-1xl font-bold md:text-2xl'>
          <Link to='/'>Where in the world?</Link>
        </h1>
        <button className='block cursor-pointer' onClick={() => toggleTheme()}>
          <FontAwesomeIcon icon={faMoon} className='mr-2' />
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
