import { Part } from "./Part"

export const Content = ({parts}) => {
  return parts.map(({name, exercises}) => (
    <Part 
      part={name}
      ex={exercises}
    />
  ))
}