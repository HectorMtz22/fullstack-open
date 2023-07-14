import { useEffect, useState } from 'react'
import { ListCountries } from './components/ListCountries'
import searchService from './services/search'

function App() {
  const [names, setNames] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    searchService
      .getAll()
      .then(data => {
        console.log("Fetched", data)
        setNames(data)
      })
  }, [])
  

  return (
    <>
      <div>
        <label htmlFor="searchbox">Find Countries </label>
        <input 
          type="text" 
          id='searchbox' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
      <ListCountries 
        names={names}
        search={search}
        setSearch={setSearch}
      />
    </>
  )
}

export default App
