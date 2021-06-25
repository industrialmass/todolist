import { colorPicker } from "../helpers/color-functions";
import { taskEditorState } from "../state";

const priorityPicker = () => {
  const priorityList = document.createElement("ul");
  priorityList.classList.add("priority-picker-list");
  priorityList.id = "priority-picker-list";

  for (let i = 0; i < 4; i++) {
    const listItem = document.createElement("li");
    listItem.id = `priority-picker-list__item${i}`;
    listItem.number = i;
    listItem.classList.add("priority-picker-list__item");

    const container = document.createElement("div");
    container.classList.add("priority-picker-list__container");

    const color = colorPicker(i);

    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-flag", color);

    const text = document.createElement("p");
    text.textContent = `Priority ${i + 1}`;
    text.classList.add("priority-picker-list__text");

    container.append(icon, text);
    if (taskEditorState.get().selectedPriority === i) {
      const check = document.createElement("i");
      check.classList.add("fas", "fa-check");
      container.append(check);
    }
    listItem.append(container);
    priorityList.append(listItem);
  }
  const priorityButton = document.getElementById("priority-picker");
  priorityButton.append(priorityList);
  return priorityList;
};

export { priorityPicker };
