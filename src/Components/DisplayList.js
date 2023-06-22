import React, { useState } from "react";
import styles from "./DisplayList.module.css";

export default function DisplayList({ list, onRemoveUser }) {
  return (
    <div className={styles.listDiv}>
      {list.length === 0 && <p>Čekam unos korisnika...</p>}
      {list.length > 0 && (
        <div>
          <p>Popis korisnika: </p>
          {list.map((listUser, index) => (
            <li className={styles["list-users"]} key={index}>
              <p className={styles["list-users-p"]}>{listUser.username}</p>
              <p className={styles["list-users-p"]}>{listUser.age}</p>
              <button onClick={() => onRemoveUser(index)}>Obriši</button>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
