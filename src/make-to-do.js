import { taskEditorState } from "./state";
import { uniqueID } from "./unique-id";

const makeToDo = () => {
  const state = taskEditorState.get();
  return {
    description: state.typedValue,
    dueDate: state.selectedDate,
    priority: state.selectedPriority,
    project: state.selectedProject,
    id: state.itemID ? state.itemID : uniqueID.generate(),
  };
};

export { makeToDo };
