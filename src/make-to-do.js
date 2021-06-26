import { appState } from "./state";
import { uniqueID } from "./unique-id";

const makeToDo = () => {
  const state = appState.get();
  return {
    description: state.typedValue,
    dueDate: state.selectedDate,
    priority: state.selectedPriority,
    project: state.selectedProject,
    id: state.itemID ? state.itemID : uniqueID.generate(),
  };
};

export { makeToDo };
