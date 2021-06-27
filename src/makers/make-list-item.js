const makeListItem = (data, parameters) => {
  // Create the list item to append to UL
  const listItem = document.createElement("li");
  listItem.id = data.id;
  listItem.classList.add(`${parameters.listId}__item`);

  // A div to hold the text content
  const listItemContent = document.createElement("div");
  listItemContent.classList.add(`${parameters.listId}__item-content`);
  const text = document.createElement("div");
  text.textContent = data.description;
  text.classList.add("text");

  listItemContent.append(text);

  // Side buttons - to the left of our content
  const listItemSideButtons = document.createElement("div");

  // Controls - to the right of our content
  const listItemControls = document.createElement("div");
  listItemControls.classList.add(`${parameters.listId}__controls`);

  // Append the relevant buttons
  if (parameters.sideButtons) {
    for (const button of parameters.sideButtons) {
      const newButton = button.func(`${button.id}|${data.id}`);
      newButton.classList.add(`${parameters.listId}__side-buttons`);
      listItemSideButtons.append(newButton);
    }
  }

  if (parameters.controlButtons) {
    for (const button of parameters.controlButtons) {
      const newButton = button.func(`${button.id}|${data.id}`);
      newButton.classList.add(`${parameters.listId}__control-buttons`);
      listItemControls.append(newButton);
    }
  }

  listItem.append(listItemSideButtons, listItemContent, listItemControls);

  return listItem;
};

export { makeListItem };
