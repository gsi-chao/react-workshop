import React, { CSSProperties } from "react";
import { NotesCard } from "../components/notes_card/NotesCard";
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

const list: INotes[] = [
  {
    title: "hello",
    body: "Lorem ipsum dolor sit amet",
  },
  {
    title: "hello",
    body: "Lorem ipsum dolor sit amet",
  },
  {
    title: "hello",
    body: "Lorem ipsum dolor sit amet",
  },
  {
    title: "hello",
    body: "Lorem ipsum dolor sit amet",
  },
  {
    title: "hello",
    body: "Lorem ipsum dolor sit amet",
  },
  {
    title: "hello",
    body: "Lorem ipsum dolor sit amet",
  },
  {
    title: "hello",
    body: "Lorem ipsum dolor sit amet",
  },
];

export const ContentContainer = () => {
  return (
    <div style={rightContainerStyle}>
      {list.map((n) => (
        <NotesCard />
      ))}
    </div>
  );
};
