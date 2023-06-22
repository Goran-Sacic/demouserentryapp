import React, { useState } from "react";
import styles from "./AddUser.module.css";

const initialUsers = {
  username: "",
  age: "",
};

export default function AddUser(props) {
  const [users, setUsers] = useState(initialUsers);

  const handleInputChange = (input, value) => {
    setUsers((prevInput) => ({ ...prevInput, [input]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUserSubmit(users);
    setUsers(initialUsers);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="username">Unesi ime i prezime:</label>
        <input
          type="text"
          onChange={(e) => handleInputChange("username", e.target.value)}
          value={users.username}
          className={styles.input}
          id="username"
          required
          minLength={2}
        ></input>
        <label htmlFor="age">Unesi godine:</label>
        <input
          type="number"
          onChange={(e) => handleInputChange("age", e.target.value)}
          value={users.age}
          className={styles.input}
          id="age"
          required
          min={1}
        ></input>
        <button className={styles.button}>Spremi</button>
      </form>
    </div>
  );
}
