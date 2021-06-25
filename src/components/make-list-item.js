import { makeButton } from "./make-button";

const makeListItem = (todo) => {
  const checkCircle = makeButton({
    id: `check-circle-${todo.id}`,
    classes: ["button", "button--check-circle"],
    icons: [
      {
        id: "check-circle-off",
        classes: ["far", "fa-circle"],
      },
      {
        id: "check-circle-on",
        classes: ["far", "fa-check-circle"],
      },
    ],
  });
  const listItem = document.createElement("li");
  listItem.id = todo.id;
  listItem.classList.add("todolist__item");

  const listItemContent = document.createElement("div");
  const text = document.createElement("div");
  text.textContent = todo.description;

  listItemContent.append(text);

  // Buttons to the right hand side that appear on hover
  // These allow you to update & delete items
  const listItemControls = document.createElement("div");
  listItemControls.classList.add("todolist__controls");
  // A trash can icon that deletes
  const remove = makeButton({
    id: `remove-${todo.id}`,
    classes: ["button", "button--remove"],
    icons: [
      {
        id: "trash-alt",
        classes: ["far", "fa-trash-alt"],
      },
    ],
  });
  // A button that updates the data
  const edit = makeButton({
    id: `edit-${todo.id}`,
    classes: ["button", "button--edit"],
    icons: [
      {
        id: "icon-edit",
        classes: ["far", "fa-edit"],
      },
    ],
  });
  listItemControls.append(edit, remove);

  listItem.append(checkCircle, listItemContent, listItemControls);

  return listItem;
};

export { makeListItem };
