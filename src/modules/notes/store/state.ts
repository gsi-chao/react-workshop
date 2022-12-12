import { INotes } from "../types/notes";

export interface INotesState {
  list: INotes[];
  user: string;
  isAuthenticated: boolean;
}

export const initialState: INotesState = {
  list: [],
  user: "",
  isAuthenticated: false,
};
