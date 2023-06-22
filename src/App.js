import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import DisplayList from "./Components/DisplayList";

function App() {
  const [users, setUsers] = useState([]);

  const formSubmitted = (users) => {
    setUsers((prevUsers) => [...prevUsers, users]);
  };

  const handleReset = (e) => {
    setUsers([]);
  };

  const removeUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>DemoUserEntryApp-GS</h1>
      <AddUser onUserSubmit={formSubmitted} />
      <DisplayList list={users} onRemoveUser={removeUser} />
      {users.length > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}

export default App;
