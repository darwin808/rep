import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  addpeople,
  deletepeople,
  updatepeople,
} from "./Actions/Actions";
function App() {
  const counter = useSelector((e) => e.CounterReducer);
  const peoples = useSelector((e) => e.PeopleReducer.peoples);
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [edit, setedit] = useState("");
  const [idholder, setidholder] = useState(0);
  const [modal, setmodal] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addpeople({ name, id: Math.random() }));
  };
  const dele = (id) => {
    dispatch(deletepeople(id));
  };
  const openmodal = (id) => {
    setidholder(id);
    setmodal(true);
  };
  const handleedit = (e) => {
    e.preventDefault();

    dispatch(updatepeople({ idholder, edit }));
  };
  return (
    <div className="App">
      {counter}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        add
      </button>
      <form action="submit" onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </form>
      {modal && (
        <form action="submit" onSubmit={handleedit}>
          <input
            type="text"
            value={edit}
            onChange={(e) => {
              setedit(e.target.value);
            }}
          />
        </form>
      )}
      {peoples.map((e) => (
        <div key={e.id}>
          {e.name}{" "}
          <button
            onClick={() => {
              dele(e.id);
            }}
          >
            delete
          </button>
          <button
            onClick={() => {
              openmodal(e.id);
            }}
          >
            edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
