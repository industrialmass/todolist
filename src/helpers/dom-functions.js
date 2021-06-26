import { appState } from "../state";
import { toDoList } from "../to-do-list";
import { makeListItem } from "../makers/make-list-item";
import { taskButton } from "../components/taskButton";

const closeOldEditor = () => {
  const state = appState.get();
  const oldEditor = document.getElementById("task-editor");
  const main = document.getElementById("main");

  // If a task editor already exists, close it
  if (oldEditor) {
    if (state.type === "edit") {
      const newItem = makeListItem(toDoList.getItemById(state.itemID));
      oldEditor.replaceWith(newItem);
    } else {
      oldEditor.remove();
      main.append(taskButton);
    }
  }
  appState.reset();
};

export { closeOldEditor };
