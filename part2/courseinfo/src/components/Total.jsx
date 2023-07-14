export const Total = ({parts}) => {
  // * Old Method
  // parts.forEach((part) => totalQuantity += part.exercises)

  const totalQuantity = parts.reduce((accumulator, current) => accumulator + current.exercises, 0)
  return (
    <p>
      <b>Total of {totalQuantity} exercises</b>
    </p>
  ) 
}