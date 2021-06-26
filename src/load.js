import { makeButton } from "./components/make-button";
import { makeList } from "./components/make-list";
import { taskButton } from "./helpers/dom-functions";
import { projects } from "./project-list";

const load = () => {
  const main = document.getElementById("main");

  const headline = document.createElement("h1");
  headline.textContent = "Landing";

  const ul = makeList();

  main.append(headline, ul, taskButton);

  const projectListElement = document.getElementById("project-list");
  const projectList = projects.get();
  if (projectList.length) {
    for (const project of projectList) {
      const listItem = document.createElement("li");
      listItem.textContent = project.name;
      listItem.id = project.id;
      projectListElement.append(listItem);
    }
  }
};

export { load };
