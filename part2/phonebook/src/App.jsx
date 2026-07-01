import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }])
  const [newName, setNewName] = useState("")

  const handleNewName = event => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addNumber = event => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }

    setPersons(persons.concat(personObject))
    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          <div>debug: {newName}</div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <People persons={persons} />
    </div>
  )
}

const People = ({ persons }) => {
  return (
    <div>
      {persons.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  )
}

const Person = ({ person }) => {
  const name = person.name

  return <div>{name}</div>
}

export default App
