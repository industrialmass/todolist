import { appState } from "../state";
import { toDoList } from "../to-do-list";
import { makeButton } from "../components/make-button";
import { makeListItem } from "../components/make-list-item";

const taskButton = (() => {
  return makeButton({
    id: "task-init",
    classes: ["button", "button--task-init"],
    description: "Add task",
    icons: [
      {
        id: "plus",
        classes: ["fa", "fa-plus", "task_button__icons"],
      },
      {
        id: "plus-circle",
        classes: ["fa", "fa-plus-circle", "task_button__icons"],
      },
    ],
  });
})();

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

export { closeOldEditor, taskButton };
