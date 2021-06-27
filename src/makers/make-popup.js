import { projects } from "../project-list";
import { appState } from "../state";
import { makeButton } from "./make-button";
import { makeInput } from "./make-input";

const makePopup = (parameters) => {
  const boolSubmit = parameters.type === "submit";
  const form = document.createElement("form");
  form.id = "popup";
  form.classList.add("popup");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("popup__header-container")

  const header = document.createElement("h2");
  header.classList.add("popup__header");
  header.textContent = boolSubmit ? "Add project" : "Edit project";
  
  headerContainer.append(header);

  const nameContainer = document.createElement("div");
  nameContainer.classList.add("popup__content-container");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name";
  nameLabel.classList.add("popup__name-label");

  const nameInput = makeInput("project-name", "e.g. Work");
  nameInput.id = "name-input";
  nameContainer.append(nameLabel, nameInput);

  if (!boolSubmit) {
    nameInput.value = projects.getItemById(appState.get().popup.id).description;
  }

  const formControls = document.createElement("div");
  formControls.classList.add("popup__controls");
  const submit = makeButton({
    id: boolSubmit ? "popup-submit" : "popup-save",
    description: boolSubmit ? "Add" : "Save",
    classes: ["button", "button--submit"],
  });
  const cancel = makeButton({
    id: "popup-cancel",
    description: "Cancel",
    classes: ["button"],
  });
  formControls.append(submit, cancel);

  form.append(headerContainer, nameContainer, formControls);
  return form;
};

export { makePopup };
