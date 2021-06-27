import { makeButton } from "../makers/make-button";

const checkCircle = (input) => {
  return makeButton({
    id: `${input}`,
    classes: ["button", "button--check-circle"],
    icons: [
      {
        id: "check-circle-off",
        classes: ["far", "fa-circle"],
      },
    ],
  });
};

export { checkCircle };
