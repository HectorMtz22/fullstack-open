import PropTypes from 'prop-types'

export const Button = ({title, action}) => {
    return (
        <button onClick={action}>{title}</button>
    )
}
Button.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
}
