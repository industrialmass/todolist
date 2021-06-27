import { getStorage, setStorage } from "./helpers/storage-functions";
import { makeProject } from "./make-project";

const projects = (() => {
  const list = getStorage("projects") ? getStorage("projects") : [];

  const _updateStorage = () => {
    setStorage("projects", list);
  };

  const get = () => {
    return list;
  };

  const getItemById = (id) => {
    for (const item of list) {
      if (item.id === id) {
        return item;
      }
    }
  };

  const add = (project) => {
    list.push(project);
    _updateStorage();
  };

  const update = (id) => {
    for (const item of list) {
      if (item.id === id) {
        list[list.indexOf(item)] = makeProject();
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

export { projects };
