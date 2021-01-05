import React, {useContext} from "react";
import {useAxios} from "../Hook/HttpRequest";
import {useHistory, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltLeft} from "@fortawesome/free-solid-svg-icons";
import {ThemeContext} from "../context/ThemeContext";
import {Link} from "react-router-dom";
import Loader from "./Loader";

const CountryPage = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const {name} = useParams();

  const url = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`;
  const urlAll = `https://restcountries.eu/rest/v2/all`;

  let country = null;

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  let countries = useAxios(url);
  let allCountries = useAxios(urlAll);

  if (countries.data && allCountries.data) {
    const borders = countries.data.map(country => {
      return country.borders;
    });

    const borderCountriesList = [];

    borders.forEach(border => {
      allCountries.data.filter(country => {
        if (border === country.alpha3Code) {
          return borderCountriesList.push(country.name);
        } else if (country.alpha3Code === border[2]) {
          return borderCountriesList.push(country.name);
        } else if (country.alpha3Code === border[3]) {
          return borderCountriesList.push(country.name);
        } else if (country.alpha3Code === border[4]) {
          return borderCountriesList.push(country.name);
        } else if (country.alpha3Code === border[5]) {
          return borderCountriesList.push(country.name);
        } else if (country.alpha3Code === border[6]) {
          return borderCountriesList.push(country.name);
        } else if (country.alpha3Code === border[8]) {
          return borderCountriesList.push(country.name);
        } else if (country.alpha3Code === border[9]) {
          return borderCountriesList.push(country.name);
        } else if (country.alpha3Code === border[10]) {
          return borderCountriesList.push(country.name);
        } else if (country.alpha3Code === border[11]) {
          return borderCountriesList.push(country.name);
        } else if (country.alpha3Code === border[12]) {
          return borderCountriesList.push(country.name);
        } else if (country.alpha3Code === border[13]) {
          return borderCountriesList.push(country.name);
        } else if (country.alpha3Code === border[14]) {
          return borderCountriesList.push(country.name);
        }
        return borderCountriesList;
      });
    });

    country = countries.data.map((country, i) => (
      <div key={i}>
        <div className='lg:flex lg:gap-20 lg:items-center'>
          <img
            src={country.flag}
            alt='flag'
            className='block w-full max-w-md mt-12 h-full lg:mt-0'
          />
          <div>
            <div className='md:flex md:gap-20'>
              <div className='space-y-2'>
                <h1 className='font-bold text-2xl my-6 lg:mt-0'>
                  {country.name}
                </h1>
                <p className='font-semibold'>
                  Native Name:{" "}
                  <span className='font-normal'>{country.nativeName}</span>
                </p>
                <p className='font-semibold'>
                  Population:{" "}
                  <span className='font-normal'>{country.population}</span>
                </p>
                <p className='font-semibold'>
                  Region: <span className='font-normal'>{country.region}</span>
                </p>
                <p className='font-semibold'>
                  Sub Region:{" "}
                  <span className='font-normal'>{country.subregion}</span>
                </p>
                <p className='font-semibold'>
                  Capital:{" "}
                  <span className='font-normal'>{country.capital}</span>
                </p>
              </div>

              <div className='mt-6 space-y-2'>
                <p className='font-semibold'>
                  Top Level Domain:{" "}
                  <span className='font-normal'>{country.topLevelDomain}</span>
                </p>
                <p className='font-semibold'>
                  Currencies:{" "}
                  <span className='font-normal'>
                    {country.currencies[0].name}
                  </span>
                </p>
                <p className='font-semibold'>
                  Languages:{" "}
                  {country.languages.map((language, i) => {
                    return (
                      <span key={i} className='font-normal'>
                        {language.name + ", "}
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>

            <div className='mt-6'>
              <p className='font-semibold'>Border Countries:</p>{" "}
              <div className='flex flex-wrap gap-3 mt-6'>
                {borderCountriesList.map((border, i) => (
                  <Link key={i} to={`/country/${border}`}>
                    <button
                      style={{
                        background: `${theme.bg}`,
                        color: `${theme.text}`,
                        boxShadow: `${theme.shadow}`,
                      }}
                      className='py-2 px-6 rounded-md'
                    >
                      {border}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  if (countries.loading) {
    country = <Loader />;
  }

  return (
    <div
      style={{background: `${theme.mainbg}`, color: `${theme.text}`}}
      className='min-h-screen pt-12'
    >
      <div className='w-4/5 mx-auto max-w-7xl mb-10'>
        <button
          style={{background: `${theme.bg}`, boxShadow: `${theme.shadow}`}}
          className='py-3 px-6  mb-5 flex items-center rounded-sm'
          onClick={() => handleClick()}
        >
          <FontAwesomeIcon icon={faLongArrowAltLeft} className='mr-3 text-lg' />
          Back
        </button>
        {country}
      </div>
    </div>
  );
};

export default CountryPage;
