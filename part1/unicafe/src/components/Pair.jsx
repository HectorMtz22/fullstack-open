export const Pair = ({title, value}) => {
    return (
        <p>{title} {value}</p>
    )
}

Pair.propTypes = {
    title: String,
    value: Number
}