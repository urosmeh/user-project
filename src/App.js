import React, { useState } from 'react';
import { AddUser } from './components/users/AddUser';
import { UsersList } from './components/users/UsersList';

const USERS_INIT = [
  {
    id: 1,
    username: "Uros",
    age: "40",
  },
  {
    id: 2,
    username: "suzana",
    age: "23",
  }
]

function App() {
  const [users, setUsers] = useState(USERS_INIT);

  const onAddUser = (user) => {
    user.id = Math.random();
    setUsers(prevUsers => [...prevUsers, user]);
  }


  return (
    <div>
      <AddUser onAddUser={onAddUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
