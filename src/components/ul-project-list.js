import { projects } from "../project-list";
import { editButton } from "./edit-button";
import { removeButton } from "./remove-button";
import { makeList } from "../makers/make-list";

const ulProjectList = () => {
  return makeList(projects.get(), {
    listId: "project-list",
    controlButtons: [
      { id: "project-remove", func: removeButton },
      { id: "project-edit", func: editButton },
    ],
  });
};

export { ulProjectList };
