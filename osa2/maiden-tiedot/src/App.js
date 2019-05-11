import React, {useState, useEffect} from 'react';
import axios from 'axios'

import Filter from './components/Filter'
import CountryInfo from './components/CountryInfo'
import Listing from './components/Listing'


function App() {
  const [countries, setCountries] = useState([])
  const [filter, setNewFilter] = useState('')

  //Datan hakeminen
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
  
  //Filterin tilamuutosten käsittely
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }
  
  //Maalistan nappulan painaminen
  const handleButtonClick = ({name}) => {
    console.log('button pressed', name)
    setNewFilter(name)
  }  

  //Filteröidyn maalistan luominen
  const filteredList = filter.length >0 ? countries.filter(country =>country.name.toLowerCase().includes(filter.toLowerCase()) ):countries
  
  //Näytettävien tulosten käsittely
  const results = () => {
    //Tapaus: Liian monta osumaa
    if (filteredList.length >10){
      return(
        <div>Too many matches. specify another filter</div>
      )
    }
    //Tapaus: alle 10, mutta yli 1 osuma, listataan osumat
    else if (filteredList.length >1) {
      console.log('aloitetaan listaus')
      return(
        //Kääydään filteröity lista läpi ja piirretään jokaiselle objektille oma nimi-nappula-komponentti
        filteredList.map(country => 
          <Listing key={country.alpha3Code} item={country.name} showButton={true} handleButtonClick={handleButtonClick} />
      )) 
    }
    //Tapaus: yksi osuma, näytetään maan tiedot
    else if (filteredList.length === 1){
      console.log(filteredList[0])
      return(
        <CountryInfo country={filteredList[0]}/>
      )
    }
    //Tapaus: ei osumia
    else {
      return(
        <div>No mathces, try again</div>
      )
    }
  }

  //Appin renderöinti
  return(
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <div>{results()}</div>
    </div>
 
  )
}

export default App;
