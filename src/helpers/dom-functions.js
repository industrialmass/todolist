import { appState } from "../state";
import { taskButton } from "../components/task-button";
import { toDoList } from "../to-do-list";
import { makeListItem } from "../makers/make-list-item";
import { checkCircle } from "../components/check-circle";
import { editButton } from "../components/edit-button";
import { removeButton } from "../components/remove-button";

const closeOldEditor = () => {
  const state = appState.get();
  const oldEditor = document.getElementById("task-editor");
  const main = document.getElementById("main");

  // If a task editor already exists, close it
  if (oldEditor) {
    if (state.type === "edit") {
      const newItem = makeListItem(toDoList.getItemById(state.itemID), {
        listId: "todolist",
        controlButtons: [
          { id: "edit", func: editButton },
          { id: "remove", func: removeButton },
        ],
        sideButtons: [{ id: "check-circle", func: checkCircle }],
      });
      oldEditor.replaceWith(newItem);
    } else {
      oldEditor.remove();
      main.append(taskButton);
    }
  }
  appState.reset();
};

const closePopup = () => {
  document.getElementById("popup").remove();
  document.getElementById("dark-screen").style.display = "none";
};

export { closeOldEditor, closePopup };
