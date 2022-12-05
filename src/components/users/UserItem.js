import "./UserItem.css"
export const UserItem = (props) => {
    const username = props.username;
    const age = props.age;

    return (
        <div className="user-item">
            <h4>{username}</h4>
            <h5>{age}</h5>
        </div>
    )
}