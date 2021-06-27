import { bodyEventListeners } from "./body-event-listeners.js";
import { mainEventListeners } from "./main-event-listeners";
import { ulProjectList } from "./components/ul-project-list";
import { renderPage } from "./render-page";

renderPage({ type: "home", projects: "none" });
mainEventListeners();

const projectListContainer = document.getElementById("project-list-container");

const ulProjects = ulProjectList();

projectListContainer.append(ulProjects);
