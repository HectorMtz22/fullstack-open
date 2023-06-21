import PropTypes from 'prop-types'

export const StatisticLine = ({title, value, finalText}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{value} {finalText}</td>
    </tr>
  )
}

StatisticLine.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  finalText: PropTypes.string
}