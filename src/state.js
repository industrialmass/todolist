const appState = (() => {
  const defaultState = {
    currentPage: {
      type: "home",
      project: "none",
    },
    popup: {
      id: null,
      description: "",
    },
    selectedDate: null,
    selectedProject: null,
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

export { appState };
