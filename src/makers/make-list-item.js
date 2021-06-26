const makeListItem = (data, parameters) => {
  // Create the list item to append to UL
  const listItem = document.createElement("li");
  listItem.id = data.id;
  listItem.classList.add(`${parameters.listId}__item`);

  // A div to hold the text content
  const listItemContent = document.createElement("div");
  const text = document.createElement("div");
  text.textContent = data.description;

  listItemContent.append(text);

  // Side buttons - to the left of our content
  const listItemSideButtons = document.createElement("div");

  // Controls - to the right of our content
  const listItemControls = document.createElement("div");
  listItemControls.classList.add(`${parameters.listId}__controls`);

  // Append the relevant buttons
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

  listItem.append(listItemSideButtons, listItemContent, listItemControls);

  return listItem;
};

export { makeListItem };
