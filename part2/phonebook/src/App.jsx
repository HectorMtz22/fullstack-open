import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("You submitted the form")
    const newPerson = {name: newName}
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

  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input 
            value={newName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  )
}

export default App