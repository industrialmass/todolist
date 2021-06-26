import { toDoList } from "../to-do-list";
import { makeListItem } from "./make-list-item";

const makeList = () => {
  const ul = document.createElement("ul");
  ul.id = "todolist";
  ul.classList.add("todolist");
  const list = toDoList.get();
  if (list.length) {
    for (const item of list) {
      const li = makeListItem(item);
      ul.append(li);
    }
  }
  return ul;
};

export { makeList };
