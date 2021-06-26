import { makeList } from "../makers/make-list";
import { toDoList } from "../to-do-list";
import { checkCircle } from "./check-circle";
import { editButton } from "./edit-button";
import { removeButton } from "./remove-button";

const ulToDoList = () => {
  return makeList(toDoList.get(), {
    listId: "todolist",
    controlButtons: [
      { id: "edit", func: editButton },
      { id: "remove", func: removeButton },
    ],
    sideButtons: [{ id: "check-circle", func: checkCircle }],
  });
};

export { ulToDoList };
