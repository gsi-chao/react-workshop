import React, { CSSProperties } from "react";
import { NotesFormContainer } from "../components/notes_form/NotesFormContainer";
import { INotesChangeProps } from "../types/notes";

const leftContainerStyle: CSSProperties = {
  flex: "1",
  backgroundColor: "gray",
  height: "100%",
  padding: "42px 21px 42px",
};

export const LeftPanelContainer = () => {
  return (
    <div style={leftContainerStyle}>
      <NotesFormContainer />
    </div>
  );
};
