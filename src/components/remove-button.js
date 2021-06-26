import { makeButton } from "../makers/make-button";

const removeButton = (input) => {
  return makeButton({
    id: `${input}`,
    classes: ["button", "button--remove"],
    icons: [
      {
        id: "trash-alt",
        classes: ["fa-fw", "far", "fa-trash-alt"],
      },
    ],
  });
};

export { removeButton };
