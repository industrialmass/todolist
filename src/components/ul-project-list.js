import { projects } from "../data/project-list";
import { editButton } from "./edit-button";
import { removeButton } from "./remove-button";
import { makeList } from "../makers/make-list";
import { projectDot } from "./project-dot";

const ulProjectList = () => {
  return makeList(projects.get(), {
    listId: "project-list",
    controlButtons: [
      { id: "project-edit", func: editButton },
      { id: "project-remove", func: removeButton },
    ],
    sideButtons: {
      uncompleted: { id: "project-side", func: projectDot },
    },
  });
};

export { ulProjectList };
