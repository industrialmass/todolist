import { bodyEventListeners } from "./event-listeners/body-event-listeners.js";
import { mainEventListeners } from "./event-listeners/main-event-listeners";
import { ulProjectList } from "./components/ul-project-list";
import { renderPage } from "./render-page";
import { getStorage, setStorage } from "./helpers/storage-functions.js";
import { projects } from "./data/project-list.js";
import { toDoList } from "./data/to-do-list.js";
import { uniqueID } from "./helpers/unique-id.js";

if (!getStorage("loadedBefore")) {
  projects.add({ description: "Tutorial", id: uniqueID.generate() });
  projects.add({ description: "Home", id: uniqueID.generate() });
  projects.add({ description: "School", id: uniqueID.generate() });
  projects.add({ description: "Hobbies", id: uniqueID.generate() });

  toDoList.add({
    description: "This is a To-Do-List designed with ease of use in mind",
    dueDate: new Date(),
    priority: 0,
    project: projects.get()[0],
    id: uniqueID.generate(),
    complete: false,
  });
  toDoList.add({
    description:
      "You can easily mark tasks as complete by clicking the circle to the left",
    dueDate: new Date(),
    priority: 3,
    project: projects.get()[0],
    id: uniqueID.generate(),
    complete: false,
  });
  toDoList.add({
    description: "Hovering over a task brings up additional controls",
    dueDate: new Date(),
    priority: 2,
    project: projects.get()[0],
    id: uniqueID.generate(),
    complete: false,
  });
  toDoList.add({
    description: "Click the pencil icon to open an editor to modify a task",
    dueDate: new Date(),
    priority: 1,
    project: projects.get()[0],
    id: uniqueID.generate(),
    complete: false,
  });
  toDoList.add({
    description: "Inside the editor you can set a priority and a due date",
    dueDate: new Date(),
    priority: 3,
    project: projects.get()[0],
    id: uniqueID.generate(),
    complete: false,
  });
  toDoList.add({
    description: "Click the trashcan icon to delete a task",
    dueDate: new Date(),
    priority: 2,
    project: projects.get()[0],
    id: uniqueID.generate(),
    complete: false,
  });
  toDoList.add({
    description: "At the bottom, click 'Add task' to add a new task",
    dueDate: new Date(),
    priority: 1,
    project: projects.get()[0],
    id: uniqueID.generate(),
    complete: false,
  });
  toDoList.add({
    description:
      "The left panel allows access to Projects to organize your tasks",
    dueDate: new Date(),
    priority: 0,
    project: projects.get()[0],
    id: uniqueID.generate(),
    complete: false,
  });
  toDoList.add({
    description: "You can also view items due today or in the next two weeks",
    dueDate: new Date(),
    priority: 2,
    project: projects.get()[0],
    id: uniqueID.generate(),
    complete: false,
  });
  toDoList.add({
    description:
      "You can add new projects by hovering over 'Projects' and clicking the plus",
    dueDate: new Date(),
    priority: 1,
    project: projects.get()[0],
    id: uniqueID.generate(),
    complete: false,
  });
  setStorage("loadedBefore", true);
}

renderPage({ type: "home", projects: "none" });
mainEventListeners();

const projectListContainer = document.getElementById("project-list-container");

const ulProjects = ulProjectList();

projectListContainer.append(ulProjects);
