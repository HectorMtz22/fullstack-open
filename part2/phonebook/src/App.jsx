import personsService from './services/persons'
import { useEffect, useState } from 'react'
import { Persons } from './components/Persons'
import { PersonForm } from './components/PersonForm'
import { Filter } from './components/Filter'
import { Notification } from './components/Notification'

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
  const [messageNotification, setMessageNotification] = useState(null)
  const [isSuccessful, setIsSuccessful] = useState(true)

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
    const recuperedId = persons
      .filter((person) => person.name === newName)
      .map((person) => person.id)[0]
    console.log("Found:", recuperedId)

    if (recuperedId) {
      const replace = confirm(`${newName} is already on the phonebook!. Replace it with a new one?`)
      if (replace) {
        personsService
          .update(recuperedId, newPerson)
          .then((data) => {
            console.log("Updated", data)
            setPersons(persons.filter(p => p.id !== data.id).concat(data))
            setMessageNotification(`Updated ${data.name}!`)
            setIsSuccessful(true)
            setTimeout(() => setMessageNotification(null), 5000)
          })
          .catch((err) => {
            console.log(err)
            setPersons(persons.filter(p => p.id !== recuperedId))
            setIsSuccessful(false)
            setMessageNotification(`Information of ${newPerson.name} has been removed from the server!`)
            setTimeout(() => setMessageNotification(null), 5000)
          })

      }
      return 
    }
    personsService
      .create(newPerson)
      .then((data) => {
        console.log(data)
        setPersons(persons.concat(data))
        setMessageNotification(`Added ${data.name}!`)
        setIsSuccessful(true)
        setTimeout(() => setMessageNotification(null), 5000)
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
      <Notification message={messageNotification} isSuccessful={isSuccessful} />
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