import { useState } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';
import './AddUser.css';

export const AddUser = (props) => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [userIClass, setUserIClass] = useState(""); //username input class
    const [ageIClass, setAgeIClass] = useState(""); //age input class 
    const [modalOpened, setModalOpened] = useState(false);

    const isUsernameValid = (username) => {
        if (username === '') {
            return false;
        }
        return username && username.length > 3;
    }

    const isAgeValid = (age) => {
        if (age === '') {
            return false;
        }

        return age >= 0 && age < 150;
    }

    const onSubmitUser = (event) => {
        event.preventDefault();
        if (!isAgeValid(age)) {
            setAge(prevState => prevState);
        } else {
            setAge("");
        }

        if (!isUsernameValid(username)) {
            setUsername(prevState => prevState);
        } else {
            setUsername("");
        }

        props.onAddUser({ username, age });
    }

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
        if (isUsernameValid(event.target.value)) {
            setUserIClass("");
        } else {
            setUserIClass("error__username");
        }
    }

    const onChangeAge = (event) => {
        setAge(event.target.value);
        if (isAgeValid(event.target.value)) {
            setAgeIClass("");
        } else {
            setAgeIClass("error__age");
        }
    }

    const onModalBackdropClickHandler = () => {
        console.log("backdrop clicked");
        onCloseModalHandler();
    }

    const onCloseModalHandler = () => {
        console.log("in onclosemodalhandler")
        setModalOpened(false);
    }

    return (
        <>
            {modalOpened && <Modal onModalButtonClick={onCloseModalHandler} onBackdropClick={onModalBackdropClickHandler} title="Modalno okno" message="Nek random message v modalnem mal daljsi tekst da vidim ka bo z besedilom" />}
            <Card>
                <form onSubmit={onSubmitUser} className="add-user">

                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={username} onChange={onChangeUsername} className={userIClass} />

                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" min="0" step="1" value={age} onChange={onChangeAge} className={ageIClass} />

                    <Button isDisabled={!(userIClass === '' && ageIClass === '')} className="add-user__input" type="submit" onClickHandler={onSubmitUser} title="Add user" />
                    <Button isDisabled={false} type="button" onClickHandler={() => setModalOpened(true)} title="Open modal" />

                    {/* <button type="submit" className="add-user__input">Add user</button> */}
                </form>

            </Card>
        </>
    )
}