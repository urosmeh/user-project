import { Card } from '../ui/Card';
import './AddUser.css';

export const AddUser = (props) => {
    const onSubmitUser = (event) => {
        event.preventDefault();
    }

    return (
        <Card>
            <form onSubmit={onSubmitUser} className="add-user">

                <label htmlFor="username">Username</label>
                <input id="username" type="text" />

                <label htmlFor="age">Age</label>
                <input id="age" type="number" min="0" step="1" />


                <button type="submit" className="add-user__input">Add user</button>
            </form>
        </Card>
    )
}