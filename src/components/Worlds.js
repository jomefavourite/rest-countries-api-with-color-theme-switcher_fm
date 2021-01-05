import React, {useContext, useState} from "react";
import Country from "./Country";
import Loader from "./Loader";
import {useAxios} from "../Hook/HttpRequest";
import {ThemeContext} from "../context/ThemeContext";
import Search from "./Search";
import Filter from "./Filter";

const Worlds = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const url = "https://restcountries.eu/rest/v2/all";

  let country = null;

  let countries = useAxios(url);
  // let countriesFiltered = useAxios(urlFilter);

  if (countries.loading) {
    country = <Loader />;
  }

  if (countries.data) {
    country = countries.data.map((country, i) => (
      <Country country={country} key={i} />
    ));
  }

  let searchCountry;

  if (countries.data && searchTerm.length >= 1) {
    searchCountry = countries.data.filter((country, i) => {
      return country.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    country = searchCountry.map((country, i) => (
      <Country country={country} key={i} />
    ));
  }

  let filteredData;

  if (filter.length && countries.data) {
    filteredData = countries.data.filter((country, i) =>
      country.region.toLowerCase().includes(filter.toLowerCase())
    );

    country = filteredData.map((country, i) => (
      <Country country={country} key={i} />
    ));
  }

  return (
    <main className='min-h-screen' style={{background: `${theme.mainbg}`}}>
      <div className='w-11/12 max-w-7xl mx-auto pt-12'>
        <div className='lg:flex lg:justify-between'>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filter
            filter={filter}
            setFilter={setFilter}
            // filteredCountry={filteredCountry}
          />
        </div>
        <div className='flex flex-wrap gap-14 justify-center'>{country}</div>
      </div>
    </main>
  );
};

export default Worlds;
