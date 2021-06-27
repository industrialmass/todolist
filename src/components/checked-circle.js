import { makeButton } from "../makers/make-button";

const checkedCircle = (input) => {
  return makeButton({
    id: `${input}`,
    classes: ["button", "button--check-circle", "button--checked-circle"],
    icons: [
      {
        id: "check-circle-off",
        classes: ["far", "fa-check-circle"],
      },
    ],
  });
};

export { checkedCircle };
