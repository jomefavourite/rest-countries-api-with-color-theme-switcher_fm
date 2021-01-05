import React, {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
// import {useAxios} from "../Hook/HttpRequest";

const Filter = ({filter, setFilter, filteredCountry}) => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      style={{
        background: `${theme.bg}`,
        color: `${theme.text}`,
        maxWidth: "209px",
      }}
      className='p-4 rounded mb-12 flex items-center shadow-sm max-w-xs'
    >
      <input
        type='text'
        list='region'
        value={filter}
        style={{background: `${theme.bg}`}}
        className='w-full outline-none cursor-pointer'
        placeholder='Filter by Region'
        onChange={e => setFilter(e.target.value)}
      />
      <datalist id='region'>
        <option value='Africa'></option>
        <option value='America'></option>
        <option value='Asia'></option>
        <option value='Europe'></option>
        <option value='Oceania'></option>
      </datalist>
    </div>
  );
};

export default Filter;
