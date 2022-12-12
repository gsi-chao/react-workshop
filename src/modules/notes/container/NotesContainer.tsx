import React, { CSSProperties, useState } from "react";
import "./styles.css";
import { ContentContainer } from "./ContentContainer";
import { LeftPanelContainer } from "./LeftPanelContainer";
import { INotes } from "../types/notes";
import { initialState } from "../store/state";
import NotesProvider from "../store/provider";

const containerStyle: CSSProperties = {};

export const NotesContainer = () => {
  return (
    <NotesProvider>
      <div className="notes-container">
        <LeftPanelContainer />
        <ContentContainer />
      </div>
    </NotesProvider>
  );
};
