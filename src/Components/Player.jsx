import React from "react";
import { useState } from "react";

export default function Player({ intialName, symbol, isActive }) {
  const [isEditting, setEditting] = useState(false);
  const [pname, changeName] = useState(intialName);

  function handleClick() {
    setEditting((prev) => !isEditting);
  }

  function handleChange(e) {
    changeName((prev) => (prev = e.target.value));
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span>
          {isEditting ? (
            <input type="text" value={pname} onChange={handleChange}></input>
          ) : (
            <span className="player-name">{pname}</span>
          )}

          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditting ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
