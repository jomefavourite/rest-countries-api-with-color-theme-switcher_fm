import React, {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
// import {useAxios} from "../Hook/HttpRequest";

const Filter = ({setFilter}) => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <>
      <select
        id='region'
        style={{
          background: `${theme.bg}`,
          color: `${theme.text}`,
          maxWidth: "209px",
        }}
        className='w-full outline-none cursor-pointer p-4 rounded mb-12 flex items-center shadow-sm max-w-xs'
        onChange={e => setFilter(e.target.value)}
        aria-label='filter region'
      >
        <option value='' placeholder='Filter by Region'>
          All
        </option>
        <option value='Africa'>Africa</option>
        <option value='America'>America</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>
    </>
  );
};

export default Filter;
