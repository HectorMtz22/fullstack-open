import { useState } from 'react'

const testingData = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]

const App = () => {
  const [persons, setPersons] = useState(testingData) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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
    setPersons(persons.concat(newPerson))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label htmlFor="filter">Filter shown with </label>
        <input 
          id='filter' 
          type="text" 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <h2>Add New</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input 
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map((person) => (
          <p key={person.name}>{person.name} {person?.number}</p>
        ))
      }
    </div>
  )
}

export default App