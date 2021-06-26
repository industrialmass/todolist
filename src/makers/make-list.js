import { makeListItem } from "./make-list-item";

const makeList = (listData, parameters) => {
  const ul = document.createElement("ul");
  ul.id = parameters.listId;
  ul.classList.add(parameters.listId);
  const list = listData;
  if (list.length) {
    for (const item of list) {
      const li = makeListItem(item, parameters);
      ul.append(li);
    }
  }
  return ul;
};

export { makeList };
