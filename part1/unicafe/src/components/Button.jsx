export const Button = ({title, action}) => {
    return (
        <button onClick={action}>{title}</button>
    )
}
Button.propTypes = {
    title: String,
    action: Function
}