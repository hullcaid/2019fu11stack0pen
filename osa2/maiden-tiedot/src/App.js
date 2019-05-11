import React, {useState, useEffect} from 'react';
import axios from 'axios'

import Filter from './components/Filter'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setNewFilter] = useState('')

  useEffect(()=> {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log(countries)
    
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  
  const CountryInfo =({country}) => {
    const listing=() =>(
      country.languages.map(language =>
        <Listing key={language.iso639_1} item={language.name}/>)
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

  const Listing = ({item}) => <li>{item}</li>

  const filteredList = filter.length >0 ? countries.filter(country =>country.name.toLowerCase().includes(filter.toLowerCase()) ):countries

  const results = () => {
    if (filteredList.length >10){
      return(
        <div>Too many matches. specify another filter</div>
      )
    }
    else if (filteredList.length >1) {
      return(
        filteredList.map(country => 
          <Listing key={country.alpha3Code} item={country.name}/>
      )) 
    }
    else if (filteredList.length === 1){
      console.log(filteredList[0])
      return(
        <CountryInfo country={filteredList[0]}/>
      )
    }
    else {
      return(
        <div>No mathces, try again</div>
      )
    }
  }

  const Results = ({items}) => {
    return(
      <div>{items}</div>
    )}

  return(
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <Results items={results()}/>
    </div>
  )
}

export default App;
