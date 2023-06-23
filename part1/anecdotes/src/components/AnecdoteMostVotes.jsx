import { Anecdote } from "./Anecdote"
import PropTypes from 'prop-types'

// Because we use props, its not necessary to use useState hook
export const AnecdoteMostVotes = ({anecdotes, votes}) => {
    let anecdoteIndex = 0
    let maxVotes = -Infinity

    votes.forEach((vote, index) => {
        if (maxVotes < vote) {
            anecdoteIndex = index
            maxVotes = vote
        }
    });

    return <Anecdote 
        anecdote={anecdotes[anecdoteIndex]}
        votes={votes[anecdoteIndex]}
    />
}
AnecdoteMostVotes.propTypes = {
    anecdotes: PropTypes.array.isRequired,
    votes: PropTypes.array.isRequired
}