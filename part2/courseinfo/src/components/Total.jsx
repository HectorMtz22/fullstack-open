export const Total = ({parts}) => {
  let totalQuantity = 0
  parts.forEach((part) => totalQuantity += part.exercises)
  return (
    <p>
      <b>Total of {totalQuantity} exercises</b>
    </p>
  ) 
}