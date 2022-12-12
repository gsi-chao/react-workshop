import { INotes } from "../types/notes";
import { INotesEventTypes } from "./types";

export interface IDeleteNotes {
  type: INotesEventTypes.REMOVE_NOTE;
  payload: string;
}

export interface IAddNotes {
  type: INotesEventTypes.ADD_NOTE;
  payload: INotes;
}

export interface ILogout {
  type: INotesEventTypes.LOGOUT;
}

export type IAction = IAddNotes | IDeleteNotes | ILogout;
