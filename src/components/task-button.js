import { makeButton } from "../makers/make-button";

const taskButton = makeButton({
  id: "task-init",
  classes: ["button", "button--task-init"],
  description: "Add task",
  icons: [
    {
      id: "plus",
      classes: ["fa", "fa-plus", "task_button__icons"],
    },
    {
      id: "plus-circle",
      classes: ["fa", "fa-plus-circle", "task_button__icons"],
    },
  ],
});

export { taskButton };
