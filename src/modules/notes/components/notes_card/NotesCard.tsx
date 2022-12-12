import React from "react";
import { BasicBlackButtton } from "../../../../components/buttons/BasicBlackButtton";
import { INotes } from "../../types/notes";
import "./styles.css";

interface Props extends INotes {
  id: string;
  onDelete: (id: string) => void;
}

export const NotesCard: React.FC<Props> = ({ body, title, id, onDelete }) => {
  return (
    <div className="notes-card">
      <div className="title-container">
        <span className="notes-title">{title}</span>
        <BasicBlackButtton
          compStyle={{ width: "auto" }}
          onClick={() => onDelete(id)}
        >
          Eliminar
        </BasicBlackButtton>
      </div>
      <p className="notes-body">{body}</p>
    </div>
  );
};
