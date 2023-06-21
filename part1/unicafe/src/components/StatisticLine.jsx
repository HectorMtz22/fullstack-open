import PropTypes from 'prop-types'

export const StatisticLine = ({title, value, finalText}) => {
    return (
        <p>{title} {value} {finalText}</p>
    )
}

StatisticLine.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    finalText: PropTypes.string
}