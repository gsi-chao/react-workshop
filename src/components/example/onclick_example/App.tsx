import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { StyleProps } from "../../../types/component_style";
import { List } from "../../list/List";
import BasicButtom from "../../buttons/BasicButtom";

const items = [
  { text: "Hello", date: "10/10/2020" },
  { text: "Welcome", date: "11/10/2020" },
  { text: "World", date: "12/10/2020" },
];

const items2 = [
  { text: "Hello1", date: "10/10/2020" },
  { text: "Welcome1", date: "11/10/2020" },
  { text: "World1", date: "12/10/2020" },
];

function App() {
  const [count, setCount] = useState<number>(0);
  const [list, setList] = useState(items);
  const onClick = () => {
    setList(items2);
  };

  const asyncOnClick = () => {
    setTimeout(() => {
      setCount((oldValue) => oldValue + 1);
    }, 5000);
  };

  const colorSwitch = (value: string): StyleProps => {
    switch (value) {
      case "red":
        return {
          backgroundColor: "red",
          color: "white",
          fontSize: 20,
        };
      case "blue":
        return {
          backgroundColor: "blue",
          color: "white",
          fontSize: 20,
        };
      default:
        return {
          backgroundColor: "red",
          color: "white",
          fontSize: 20,
        };
    }
  };

  return (
    <div className="App">
      <List list={list} />
      <BasicButtom onClick={onClick}>Random</BasicButtom>
    </div>
  );
}

export default App;
