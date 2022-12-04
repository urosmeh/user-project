export const Button = (props) => {
    return (
        <button type={props.type || "button"} onClick={props.onClickHandler}>{props.title}</button>
    )
}