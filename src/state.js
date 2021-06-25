import { projects } from "./projects";

const taskEditorState = (() => {
  const defaultState = {
    selectedDate: null,
    selectedProject: projects[0],
    selectedPriority: 3,
    typedValue: "",
    type: "create",
    itemID: null,
  };

  // Initialize default state
  let state = defaultState;

  const get = () => {
    return state;
  };

  // New state should be an object
  const set = (newState) => {
    state = { ...state, ...newState };
    return state;
  };

  const reset = () => {
    state = defaultState;
    return state;
  };

  return {
    get,
    set,
    reset,
  };
})();

export { taskEditorState };
