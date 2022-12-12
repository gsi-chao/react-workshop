import { createContext } from "react";
import { INotes } from "../types/notes";
import { IAction } from "./action";
import { initialState, INotesState } from "./state";

const NotesContext = createContext<{
  state: INotesState;
  dispatch: React.Dispatch<IAction>;
}>({ state: initialState, dispatch: () => {} });

export default NotesContext;
