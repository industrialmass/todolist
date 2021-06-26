const makeListItem = (data, parameters) => {
  const listItem = document.createElement("li");
  listItem.id = data.id;
  listItem.classList.add(`${parameters.listId}__item`);

  const listItemContent = document.createElement("div");
  const text = document.createElement("div");
  text.textContent = data.description;

  listItemContent.append(text);

  const listItemSideButtons = document.createElement("div");

  const listItemControls = document.createElement("div");
  listItemControls.classList.add(`${parameters.listId}__controls`);

  if (parameters) {
    if (parameters.sideButtons) {
      for (const button of parameters.sideButtons) {
        listItemSideButtons.append(button.func(button.id));
      }
    }

    if (parameters.controlButtons) {
      for (const button of parameters.controlButtons) {
        listItemControls.append(button.func(button.id));
      }
    }
  }

  listItem.append(listItemSideButtons, listItemContent, listItemControls);

  return listItem;
};

export { makeListItem };
