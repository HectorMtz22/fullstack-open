import PropTypes from 'prop-types'

export const Pair = ({title, value, finalText}) => {
    return (
        <p>{title} {value} {finalText}</p>
    )
}

Pair.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    finalText: PropTypes.string
}