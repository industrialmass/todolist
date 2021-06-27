import { makeButton } from "../makers/make-button";

const projectDot = (input) => {
  return makeButton({
    id: `${input}`,
    classes: ["button", "dot"],
    icons: [
      {
        id: "icon-edit",
        classes: ["fa-fw", "fas", "fa-dot-circle"],
      },
    ],
  });
};

export { projectDot };
