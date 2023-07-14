import { Part } from "./Part"

export const Content = ({parts}) => {
  return parts.map(({name, exercises, id}) => (
    <Part 
      key={id}
      part={name}
      ex={exercises}
    />
  ))
}