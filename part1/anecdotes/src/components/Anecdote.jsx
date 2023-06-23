import PropTypes from 'prop-types'

export const Anecdote = ({anecdote, votes}) => {
    return (
        <>
            <p>
                {anecdote}
            </p>
            <p>has {votes} votes.</p>
        </>
    )
}
Anecdote.propTypes = {
    anecdote: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
}