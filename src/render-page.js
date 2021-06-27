import { appState } from "./state";
import { taskButton } from "./components/task-button";
import { ulToDoList } from "./components/ul-to-do-list";
import { mainEventListeners } from "./main-event-listeners";

const _getHeaderText = (page) => {
  if (page.type === "project") {
    return page.project.description;
  } else if (page.type === "today") {
    return "Today";
  } else if (page.type === "upcoming") {
    return "Upcoming";
  } else {
    return "Landing";
  }
};

const renderPage = (page) => {
  if (!page) {
    page = appState.get().currentPage;
  } else {
    appState.set({ currentPage: page });
  }
  const main = document.createElement("div");
  main.id = "main";
  main.classList.add("main-container");

  if (document.getElementById("main")) {
    document.getElementById("main").replaceWith(main);
    mainEventListeners();
  }
  const headline = document.createElement("h1");
  headline.textContent = _getHeaderText(page);

  const ul = ulToDoList();

  main.append(headline, ul, taskButton);
};

export { renderPage };
