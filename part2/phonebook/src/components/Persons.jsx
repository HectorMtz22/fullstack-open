export const Persons = ({persons, filter, onClick}) => {
  return persons
    .filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
    .map((person) => (
      <div key={person.name}>
        <span>{person.name} {person?.number}</span>
        <button onClick={() => onClick(person)}>Delete</button>
      </div>
    ))
}