import { makeButton } from "./components/make-button";
import { makeList } from "./components/make-list";
import { projects } from "./projects";

const load = () => {
  const main = document.getElementById("main");

  const headline = document.createElement("h1");
  headline.textContent = "Landing";

  const button = makeButton({
    id: "task-init",
    classes: ["button", "button--task-init"],
    description: "Add task",
    icons: [
      {
        id: "plus",
        classes: ["fa", "fa-plus", "task_button__icons"],
      },
      {
        id: "plus-circle",
        classes: ["fa", "fa-plus-circle", "task_button__icons"],
      },
    ],
  });

  const ul = makeList();

  main.append(headline, ul, button);

  const projectList = document.getElementById("project-list");
  for (const project of projects) {
    const listItem = document.createElement("li");
    listItem.textContent = project.name;
    projectList.append(listItem);
  }
};

export { load };
