import "./Button.css"

export const Button = (props) => {
    return (
        <button disabled={props.isDisabled} type={props.type || "button"} onClick={props.onClickHandler}>{props.title}</button>
    )
}