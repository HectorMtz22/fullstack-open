import { useState } from "react"
import { Anecdote } from "./Anecdote"
import PropTypes from 'prop-types'

export const AnecdoteMostVotes = ({anecdotes, votes}) => {
    const [anecdoteIndex] = useState(0)
    return <Anecdote 
        anecdote={anecdotes[anecdoteIndex]}
        votes={votes[anecdoteIndex]}
    />
}
AnecdoteMostVotes.propTypes = {
    anecdotes: PropTypes.array.isRequired,
    votes: PropTypes.array.isRequired
}