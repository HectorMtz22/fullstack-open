import PropTypes from 'prop-types'

export const Pair = ({title, value}) => {
    return (
        <p>{title} {value}</p>
    )
}

Pair.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}