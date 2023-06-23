import { Part } from "./Part"

export const Content = ({parts}) => {
  const [part1, part2, part3] = parts
  return (
    <>
      <Part 
        part={part1.name}
        ex={part1.exercises}
      />
      <Part 
        part={part2.name}
        ex={part2.exercises}
      />
      <Part 
        part={part3.name}
        ex={part3.exercises}
      />
    </>
  )
}