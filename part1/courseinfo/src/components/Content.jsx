import { Part } from "./Part"

export const Content = (props) => {
  const {part1, part2, part3, exercises1, exercises2, exercises3} = props
  return (
    <>
      <Part 
        part={part1}
        ex={exercises1}
      />
      <Part 
        part={part2}
        ex={exercises2}
      />
      <Part 
        part={part3}
        ex={exercises3}
      />
    </>
  )
}