import React from 'react'
import Listing from './Listing'

//Yksittäisen maan tiedot esittävä elementti
const CountryInfo =({country}) => {
    const listing=() =>(
      country.languages.map(language =>
        <Listing key={language.iso639_1} item={language.name} showButton={false}/>)
    )
    return(
      <div>
        <h1>{country.name}</h1>
        <div>Capital: {country.capital}</div>
        <div>Population: {country.population}</div>
        <h2>Languages:</h2>
        <div>{listing()}</div>
        <div>
          <div>
            <img src={country.flag} height='72' alt='flag'/>
          </div>
        </div>
      </div>
    )
  }

  export default CountryInfo