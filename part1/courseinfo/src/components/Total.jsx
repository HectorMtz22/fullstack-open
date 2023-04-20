export const Total = ({parts}) => {
  let totalQuantity = 0
  parts.forEach((part) => totalQuantity += part.exercises)
  return <p>Number of exercises {totalQuantity}</p>
}