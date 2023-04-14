function App() {
  const date = new Date()
  const a = 10
  const b = 20
  console.log(date.toString(), a + b)
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Hector"/>
      <Hello />
    </div>
  )
}

const Hello = ({name}) => {
  return (
    <p>Hello World {name}</p>
  )
}

export default App
