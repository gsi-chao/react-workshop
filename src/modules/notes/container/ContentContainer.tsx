import React, { CSSProperties, useState } from "react";
import { useContext } from "react";
import { NotesCard } from "../components/notes_card/NotesCard";
import NotesContext from "../store/context";
import { INotesEventTypes } from "../store/types";
import { INotes } from "../types/notes";

const rightContainerStyle: CSSProperties = {
  flex: "2",
  height: "100%",
  padding: 42,
  overflowX: "hidden",
  overflowY: "auto",
  gap: 12,
  display: "flex",
  flexWrap: "wrap",
};

export const ContentContainer = () => {
  const notesContext = useContext(NotesContext);
  const onDelete = (id: string) => {
    notesContext.dispatch({ type: INotesEventTypes.REMOVE_NOTE, payload: id });
  };
  return (
    <div style={rightContainerStyle}>
      {notesContext.state.list.map((n, key) => (
        <NotesCard {...n} onDelete={onDelete} key={key.toString()} />
      ))}
    </div>
  );
};
