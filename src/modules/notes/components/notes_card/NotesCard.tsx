import React from "react";
import { BasicBlackButtton } from "../../../../components/buttons/BasicBlackButtton";
import "./styles.css";

export const NotesCard = () => {
  return (
    <div className="notes-card">
      <div className="title-container">
        <span className="notes-title">Hello 1</span>
        <BasicBlackButtton compStyle={{ width: "auto" }} onClick={() => {}}>
          Eliminar
        </BasicBlackButtton>
      </div>
      <p className="notes-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
        molestias! Quasi minima similique sit officiis. Architecto nobis,
        similique asperiores suscipit, repellat numquam ea ullam ut illo vitae
        repellendus saepe aliquid!
      </p>
    </div>
  );
};
