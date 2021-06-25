import { makeButton } from "./make-button";
import { makeInput } from "./make-input";
import { dateToString } from "../helpers/date-functions";
import { colorPicker } from "../helpers/color-functions";
import { taskEditorState } from "../state";

const taskEditor = () => {
  const form = document.createElement("form");
  form.classList.add("form");
  form.id = "task-editor";

  const state = taskEditorState.get();

  if (state.itemID) {
    form.classList.add(state.itemID);
  }

  // Main input controls
  const inputControls = document.createElement("div");
  inputControls.classList.add("input-controls");

  const input = makeInput("input", "e.g. Find my car keys again");
  input.value = state.typedValue;

  // These go right below the input
  const extras = document.createElement("div");
  extras.classList.add("extras");

  const date = makeButton({
    id: "date",
    classes: ["button", "button--date"],
    description: state.selectedDate
      ? dateToString(state.selectedDate)
      : "Schedule",
  });

  const projectPicker = makeButton({
    id: "project-picker",
    classes: ["button", "button--project-picker"],
    description: state.selectedProject ? state.selectedProject.name : "Landing",
  });
  const priorityPicker = makeButton({
    id: "priority-picker",
    classes: ["button", "button--priority-picker"],
    icons: [
      {
        id: "picker-icon",
        classes: [state.selectedPriority === 3 ? "far" : "fas", "fa-flag"],
      },
    ],
  });

  priorityPicker.classList.add(colorPicker(state.selectedPriority));

  extras.append(date, projectPicker, priorityPicker);

  inputControls.append(input, extras);

  // Handle behavior of the form - submit and cancel
  const formControls = document.createElement("div");
  formControls.classList.add("form-controls");

  // These go below the input controls
  const submitButton = makeButton({
    id: state.type === "create" ? "submit" : "save",
    classes: ["button", "button--submit"],
    description: state.type === "create" ? "Add task" : "Save",
  });
  const cancelButton = makeButton({
    id: "cancel",
    classes: ["button", "button--cancel"],
    description: "Cancel",
  });

  formControls.append(submitButton, cancelButton);

  form.append(inputControls, formControls);

  return form;
};

export { taskEditor };
