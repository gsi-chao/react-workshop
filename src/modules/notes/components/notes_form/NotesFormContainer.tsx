import React, { CSSProperties, useState } from "react";
import { useContext } from "react";
import NotesContext from "../../store/context";
import { INotesEventTypes } from "../../store/types";
import { INotes, INotesChangeProps } from "../../types/notes";
import { NotesForm } from "./NotesForm";

const divStyles: CSSProperties = {
  backgroundColor: "white",
  minHeight: 200,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "48px 32px",
  gap: 26,
  boxShadow:
    "0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)",
};

export const NotesFormContainer = () => {
  const notesContext = useContext(NotesContext);
  const [value, setValue] = useState<INotes>({ title: "", body: "", id: "" });

  const onChange = (note: INotes) => {
    notesContext.dispatch({
      type: INotesEventTypes.ADD_NOTE,
      payload: {
        ...note,
        id: window.crypto.getRandomValues(new Uint32Array(1)).toString(),
      },
    });
  };

  return (
    <div style={divStyles}>
      <NotesForm data={value} onChange={onChange} />
    </div>
  );
};
