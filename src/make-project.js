import { appState } from "./state";
import { uniqueID } from "./unique-id";

const makeProject = () => {
  const state = appState.get();
  return {
    name: state.popup.name,
    id: state.popup.id ? state.popup.id : uniqueID.generate(),
  };
};

export { makeProject };
