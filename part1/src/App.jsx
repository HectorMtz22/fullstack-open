function App() {
  const date = new Date()
  const a = 10
  const b = 20 
  console.log(date.toString(), a + b)
  const data = ['hola', 'adios']
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Hector"/>
      <Hello />
      <PrintData data={data} />
    </div>
  )
}

const Hello = ({name}) => {
  console.log(name);
  return (
    <p>Hello World {name}</p>
  )
}

const PrintData = (props) => {
  return (
    <p>{props.data}</p>
  )
}

export default App
