import { appState } from "./state";
import { taskButton } from "./components/task-button";
import { ulToDoList } from "./components/ul-to-do-list";
import { mainEventListeners } from "./main-event-listeners";

const renderPage = (page) => {
  appState.set({ currentPage: page });
  const main = document.createElement("div");
  main.id = "main";
  main.classList.add("main-container");

  if (document.getElementById("main")) {
    document.getElementById("main").replaceWith(main);
    mainEventListeners();
  }
  const headline = document.createElement("h1");
  headline.textContent = page.project ? page.project.description : "Landing";

  const ul = ulToDoList();

  main.append(headline, ul, taskButton);
};

export { renderPage };
