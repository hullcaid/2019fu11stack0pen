import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setNewFilter ] = useState('')

  useEffect(()=> {
    console.log('effect')

    const eventHandler = response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    }

    const promise = axios.get('http://localhost:3001/persons')
    promise.then(eventHandler)
  }, [])

  const handleNameChange = (event) =>{
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    console.log('Nappi painettu, lisätävä nimi:', newName)
    let exists = false
    
    persons.forEach((person) => {
      console.log('tarkistetaan', person.name)
      if (newName === person.name){
        window.alert(`${newName} on jo listassa`)
        exists = true
      }
    } )
    
    if(!exists) {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      
      console.log(personObject)
      
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const Listing = ({person}) => <li>{person.name} {person.number}</li>

  const filteredList = filter.length >0 ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()) ) : persons

  const rows = () => filteredList.map(person =>
  <Listing key={person.name} person={person} />) 

  return (
    <div>
      <h2>Puhelinluettelo</h2>
        <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h3>Lisää uusi</h3>
        <PersonForm 
          addName={addName} 
          newName={newName} 
          newNumber={newNumber} 
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
        />
      <h3>Numerot</h3>
      <Persons rows={rows()}/>
    </div>
  )

}

export default App