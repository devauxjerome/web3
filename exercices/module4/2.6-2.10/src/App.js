import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'1' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


const handleNameChange = (event) => {
  console.log(event.target.value)
  setNewName(event.target.value)
}

const handleNumberChange  = (event) => {
  console.log(event.target.value)
  setNewNumber(event.target.value)
}


const hook = () => {
  console.log('effect')
  personService
    .getAll()
    .then(initialPersons => {
      console.log('promise fulfilled')
      setPersons(initialPersons)
    })
}

useEffect(hook, [])


const addName = (event) => {
  event.preventDefault()
  console.log('button clicked', event.target)
  const nameObject = {
    name: newName,
    number: newNumber
  }
  var a = false;
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].name === newName) {
      a = true;
    }
  }
  if (!a) {
    personService
    .create(nameObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('');
      setNewNumber('');
    })
  } else {
    alert(`${newName} is already added to phonebook`)
  }
  
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key={person.id}>
            <p>Nom : {person.name}   Numéro de téléphone: {person.number}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App