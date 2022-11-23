import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { StyleProps } from "../../../types/component_style";
import BasicButtom from "../../buttons/BasicButtom";

function App() {
  const onClick = () => {
    alert("Click");
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
      <BasicButtom onClick={onClick}>Click Me!!</BasicButtom>
      <BasicButtom compStyle={colorSwitch("red")} onClick={onClick}>
        Click Red!!
      </BasicButtom>
      <BasicButtom compStyle={colorSwitch("blue")} onClick={onClick}>
        Click Red!!
      </BasicButtom>
      <BasicButtom onClick={onClick}>Click Red!!</BasicButtom>
    </div>
  );
}

export default App;
