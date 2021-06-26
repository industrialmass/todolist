import { makeButton } from "../makers/make-button";

const editButton = (input) => {
  return makeButton({
    id: `${input}`,
    classes: ["button", "button--edit"],
    icons: [
      {
        id: "icon-edit",
        classes: ["fa-fw", "far", "fa-edit"],
      },
    ],
  });
};

export { editButton };
