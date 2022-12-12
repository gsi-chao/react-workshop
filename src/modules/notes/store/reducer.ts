import { IAction } from "./action";
import { INotesState } from "./state";
import { INotesEventTypes } from "./types";

const reducer = (state: INotesState, action: IAction): INotesState => {
  switch (action.type) {
    case INotesEventTypes.ADD_NOTE:
      const addList = [...state.list, action.payload];
      return { ...state, ...{ list: addList } };
    case INotesEventTypes.REMOVE_NOTE:
      const removedList = state.list.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, ...{ list: removedList } };
    case INotesEventTypes.LOGOUT:
      return { list: [], isAuthenticated: false, user: "" };
  }
};

export default reducer;
