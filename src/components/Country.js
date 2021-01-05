import React, {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
import {Link} from "react-router-dom";

const Country = ({country}) => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      style={{background: `${theme.bg}`}}
      className='w-full card rounded-lg overflow-hidden shadow-md'
    >
      <Link to={`/country/${country.name}`}>
        <img
          src={country.flag}
          alt='flag'
          className='h-52 object-cover w-full'
        />
        <div
          style={{background: `${theme.bg}`, color: `${theme.text}`}}
          className='p-6 pb-8'
        >
          <h3 className='text-xl font-bold mb-3'>{country.name}</h3>
          <div className='space-y-3'>
            <p className='font-semibold'>
              Population:{" "}
              <span className='font-normal'>{country.population}</span>
            </p>
            <p className='font-semibold'>
              Region: <span className='font-normal'>{country.region}</span>
            </p>
            <p className='font-semibold'>
              Capital: <span className='font-normal'>{country.capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Country;
