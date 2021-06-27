import { makeButton } from "./make-button";
import { makeInput } from "./make-input";

var parameters = {
  headerText: "Add project",
  controlButtons: [],
};

const makePopup = (parameters) => {
  const form = document.createElement("form");
  form.id = "popup";
  form.classList.add("popup");

  const header = document.createElement("h2");
  header.textContent = parameters.headerText;

  const nameContainer = document.createElement("div");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name";
  const nameInput = makeInput("project-name", "e.g. Work");
  nameInput.id = "name-input";
  nameContainer.append(nameLabel, nameInput);

  const formControls = document.createElement("div");
  formControls.classList.add("popup__controls");
  const submit = makeButton({
    id: "popup-submit",
    description: "Add",
    classes: "button",
  });
  const cancel = makeButton({
    id: "popup-cancel",
    description: "Cancel",
    classes: "button",
  });
  formControls.append(submit, cancel);

  form.append(header, nameContainer, formControls);
  return form;
};

export { makePopup };
