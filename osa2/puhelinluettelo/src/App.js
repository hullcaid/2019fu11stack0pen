import React, { useState } from 'react'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-123456' },
    { name: 'Arto Järvinen', number: '040-123456' },
    { name: 'Lea Kutvonen', number: '040-123456' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setNewFilter ] = useState('')

  const handleNameChange = (event) =>{
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
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
      <h1>Puhelinluettelo</h1>
        <div>
          rajaa näytettäviä: <input value={filter} onChange={handleFilterChange}/>
        </div>
      <h2>Lisää uusi</h2>
        <form onSubmit={addName}>
          <div>
            nimi: <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
            numero: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
      <h2>Numerot</h2>
      {rows()}
    </div>
  )

}

export default App