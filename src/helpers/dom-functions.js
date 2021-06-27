import { appState } from "../state";
import { taskButton } from "../components/task-button";
import { ulToDoList } from "../components/ul-to-do-list";

const closeOldEditor = () => {
  const state = appState.get();
  const oldEditor = document.getElementById("task-editor");
  const main = document.getElementById("main");

  // If a task editor already exists, close it
  if (oldEditor) {
    if (state.type === "edit") {
      const newList = ulToDoList();
      document.getElementById("todolist").replaceWith(newList);
    } else {
      oldEditor.remove();
      main.append(taskButton);
    }
  }
};

const closePopup = () => {
  document.getElementById("popup").remove();
  document.getElementById("dark-screen").style.display = "none";
};

export { closeOldEditor, closePopup };
