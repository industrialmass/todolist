import { taskButton } from "./components/task-button";
import { ulToDoList } from "./components/ul-to-do-list";
import { ulProjectList } from "./components/ul-project-list";

const load = () => {
  const main = document.getElementById("main");

  const headline = document.createElement("h1");
  headline.textContent = "Landing";

  const ul = ulToDoList();

  main.append(headline, ul, taskButton);
  const projectListContainer = document.getElementById(
    "project-list-container"
  );

  const ulProjects = ulProjectList();

  projectListContainer.append(ulProjects);
};

export { load };
