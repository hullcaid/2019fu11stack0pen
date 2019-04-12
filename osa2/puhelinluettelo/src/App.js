import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
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
      }
      
      console.log(personObject)
      
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const Listing = ({person}) => <li>{person.name}</li>

  const rows = () => persons.map(person =>
    <Listing 
      key={person.name}
      person={person}
      />
    )

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addName}>
        <div>
          nimi: <input value={newName} onChange={handleNameChange}/>
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