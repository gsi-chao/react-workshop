import React, { CSSProperties, useState } from "react";
import { INotes } from "../../types/notes";
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
  const [value, setValue] = useState<INotes>({ title: "", body: "" });
  return (
    <div style={divStyles}>
      <NotesForm data={value} onChange={() => {}} />
    </div>
  );
};
