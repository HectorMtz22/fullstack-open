export const Filter = ({filter, setFilter}) => {
  return (
    <div>
      <label htmlFor="filter">Filter shown with </label>
      <input 
        id='filter' 
        type="text" 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  )
}