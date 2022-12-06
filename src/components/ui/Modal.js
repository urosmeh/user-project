import { Button } from './Button'
import './Modal.css'
import ReactDOM from "react-dom"

const Backdrop = (props) => {
    return <div className='backdrop' onClick={props.onBackdropClick}></div>
}

const ModalWindow = (props) => {
    return (
        <div className="modal">
            <header className='header'><h2>{props.title}</h2></header>
            <div style={{ padding: "1rem" }}>
                {props.message}
            </div>
            <footer className='footer'>
                <Button title="Close me" onClickHandler={props.onModalButtonClick} />
            </footer>
        </div >
    )
}


export const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onBackdropClick={props.onBackdropClick} />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalWindow title={props.title} message={props.message} onModalButtonClick={props.onModalButtonClick} />, document.getElementById("modal-root"))}
        </>
    )
}