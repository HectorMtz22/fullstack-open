function App() {
  const date = new Date()
  const a = 10
  const b = 20
  console.log(date.toString(), a + b)
  return (
    <div>
      <p>Hello World</p>
      <p>My date is {date.toString()}</p>
      <p>{a} + {b} = {a + b}</p>
    </div>
  )
}

export default App
