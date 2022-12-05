import { Card } from "../ui/Card";
import { UserItem } from "./UserItem";
import "./UserList.css";

export const UsersList = (props) => {
    const users = props.users;

    return (
        <div>
            <Card>
                <div className="user-list">
                    {users.map(user => <UserItem key={user.id} username={user.username} age={user.age} />)}
                </div>
            </Card>
        </div>
    )
}