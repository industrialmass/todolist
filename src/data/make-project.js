import { appState } from "../state";
import { uniqueID } from "../helpers/unique-id";

const makeProject = () => {
  const state = appState.get();
  return {
    description: state.popup.description,
    id: state.popup.id ? state.popup.id : uniqueID.generate(),
  };
};

export { makeProject };
