import { makeList } from "../makers/make-list";
import { appState } from "../state";
import { toDoList } from "../to-do-list";
import { checkCircle } from "./check-circle";
import { editButton } from "./edit-button";
import { removeButton } from "./remove-button";

const ulToDoList = () => {
  const state = appState.get();
  let filterCallback;
  if (state.currentPage.type === "project") {
    filterCallback = (ele) => {
      return ele.project.id === state.currentPage.project.id;
    };
  } else {
    filterCallback = () => true;
  }

  return makeList(toDoList.get(filterCallback), {
    listId: "todolist",
    controlButtons: [
      { id: "edit", func: editButton },
      { id: "remove", func: removeButton },
    ],
    sideButtons: [{ id: "check-circle", func: checkCircle }],
  });
};

export { ulToDoList };
