import { getStorage, setStorage } from "./helpers/storage-functions";
import { makeToDo } from "./make-to-do";

const toDoList = (() => {
  const list = getStorage("toDoList") ? getStorage("toDoList") : [];
  // JSON.parse, which we use to retrieve items from storage,
  // unfortunately doesn't preserve Date objects, so we need
  // to use the Date constructor to make new ones
  for (const item of list) {
    if (item.dueDate && typeof item.dueDate !== "object") {
      item.dueDate = new Date(item.dueDate);
    }
  }

  const _updateStorage = () => {
    setStorage("toDoList", list);
  };

  const get = (parse) => {
    return list.filter(parse);
  };

  const getItemById = (id) => {
    for (const item of list) {
      if (item.id === id) {
        return item;
      }
    }
  };

  const add = (todo) => {
    list.push(todo);
    _updateStorage();
  };

  const update = (id) => {
    for (const item of list) {
      if (item.id === id) {
        list[list.indexOf(item)] = makeToDo();
      }
    }

    _updateStorage();
  };

  const remove = (id) => {
    for (const item of list) {
      if (item.id === id) {
        list.splice(list.indexOf(item), 1);
      }
    }
    _updateStorage();
  };

  return { get, getItemById, add, update, remove };
})();

export { toDoList };
