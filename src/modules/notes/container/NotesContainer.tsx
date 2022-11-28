import React, { CSSProperties } from "react";
import "./styles.css";
import { ContentContainer } from "./ContentContainer";
import { LeftPanelContainer } from "./LeftPanelContainer";

const containerStyle: CSSProperties = {};

export const NotesContainer = () => {
  return (
    <div className="notes-container">
      <LeftPanelContainer />
      <ContentContainer />
    </div>
  );
};
