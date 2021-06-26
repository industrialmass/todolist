import { projects } from "../project-list";
import { editButton } from "./edit-button";
import { removeButton } from "./remove-button";
import { makeList } from "../makers/make-list";

const ulProjectList = () => {
  return makeList(projects.get(), {
    listId: "project-list",
    controlButtons: [
      { id: "project-edit", func: editButton },
      { id: "project-remove", func: removeButton },
    ],
  });
};

export { ulProjectList };
