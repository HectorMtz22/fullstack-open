import personsService from './services/persons'
import { useEffect, useState } from 'react'
import { Persons } from './components/Persons'
import { PersonForm } from './components/PersonForm'
import { Filter } from './components/Filter'

// const testingData = [
//     { name: 'Arto Hellas', number: '040-123456', id: 1 },
//     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//     { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
// ]


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(data => {
        setPersons(data)
      })
      .catch(() => {
        alert("Server down")
        console.warn("Server down")
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("You submitted the form")
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const isNew = persons
      .filter((person) => person.name === newName)
      .length === 0
    console.log("Es nuevo?", isNew)

    if (!isNew) {
      alert(`${newName} is already in the phonebook!`)
      return 
    }
    personsService
      .create(newPerson)
      .then((data) => {
        console.log(data)
        setPersons(persons.concat(data))
      })
      .catch((err) => {
        alert("Ocurrió un error", err)
        console.log(err)
      })
  }

  const handleDelete = (person) => {
    console.log("Delete", person)
    const willRemove = confirm(`Are you sure you want to delete ${person.name}?`)
    if (willRemove) {
      console.log("Removing...")
      personsService
        .remove(person.id)
        .then(
          setPersons(persons.filter((p) => p.id !== person.id))
        )
        .catch((err) => {
          alert("Ocurrió un error", err)
          console.log(err)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filter={filter}
        setFilter={setFilter}
      />
      <h2>Add New</h2>
      <PersonForm 
        newName={newName}
        newNumber={newNumber}
        handleSubmit={handleSubmit}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons 
        filter={filter}
        persons={persons}
        onClick={handleDelete}
      />
      
    </div>
  )
}

export default App