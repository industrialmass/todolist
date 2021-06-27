import { isToday, isUpcoming } from "../helpers/date-functions";
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
      return ele.project
        ? ele.project.id === state.currentPage.project.id
        : false;
    };
  } else if (state.currentPage.type === "today") {
    filterCallback = (ele) => {
      return ele.dueDate ? isToday(ele.dueDate) : false;
    };
  } else if (state.currentPage.type === "upcoming") {
    filterCallback = (ele) => {
      return ele.dueDate ? isUpcoming(ele.dueDate) : false;
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
