import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/entries'
import RemoveButton from './components/RemoveButton'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setNewFilter ] = useState('')
  const [ notificationMessage, setNotificationMessage] = useState(null)
  const [ notificationType, setNotificationType] = useState(null)

  useEffect(()=> {
    console.log('Effect: getting initial data')

    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => notify('error', `Virhe: ${error}`))
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

  const notify = (type, message) => {
    console.log(type, ': ', message);
    setNotificationType(type)
    setNotificationMessage(message)
    setTimeout(()=> {
       setNotificationMessage(null)
    }, 5000)
  }

  const addName = (event) => {
    event.preventDefault()
    console.log('Add button pressed, name to be added:', newName)
    let exists = false
    const personObject = {
      name: newName,
      number: newNumber,
    }

    persons.forEach((person) => {
      console.log('tarkistetaan', person.name)
      if (newName === person.name){
        if(window.confirm(`${newName} on jo luettelossa, korvataanko vanha numero uudella?`)){
          const newData = personObject
          personService
            .modify(person.id, newData)
            .then(returnedPerson =>{
              setPersons(persons.map(entry =>{
                if(entry.id === returnedPerson.id){
                  notify(`Muokattiin, ${returnedPerson.name}`)
                  return(returnedPerson)
                }
                else{
                  return(entry)
                }
              }))
            })
            .catch(error => notify('error', error.response.data.error))
        }
        exists = true
      }
    } )
    
    if(!exists) {
      
      console.log('Adding to database: ',personObject)
      personService
        .create(personObject)
        .then(returnedPerson =>{
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          notify("notification", `Lisättiin ${returnedPerson.name}`)
        })
        .catch(error => {
          console.log(error.response.data)
          notify('error', error.response.data.error)
        })
      }
    }

  const removeName = ({person})=>{
    if (window.confirm(`Poistetaanko ${person.name}?`)){
      console.log("Removing from database: ", person.id)
      personService
        .remove(person.id)
        .then(returnedId =>{
          setPersons(persons.filter(person => person.id !== returnedId))
          notify("notification", `poistettiin ${person.name}`)
        })
        .catch(error => notify('error', `Virhe: Henkilö ${person.name} oli jo poistettu.`))
    }
    
  }

  const Listing = ({person}) => <li>{person.name} {person.number} <RemoveButton person={person} removeName={removeName}></RemoveButton></li>

  const filteredList = filter.length >0 ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()) ) : persons

  const rows = () => filteredList.map(person =>
  <Listing key={person.name} person={person} />) 

  return (
    <div>
      <h2>Puhelinluettelo</h2>
        <Notification message={notificationMessage} messageClass={notificationType}/>
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