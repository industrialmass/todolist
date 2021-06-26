import { appState } from "../state";

const projectPicker = (projects) => {
  const projectList = document.createElement("ul");
  projectList.classList.add("project-picker-list");
  projectList.id = "project-picker-list";

  for (const [index, project] of projects.entries()) {
    const listItem = document.createElement("li");
    listItem.classList.add("project-picker-list__item");
    listItem.number = index;

    const container = document.createElement("div");
    container.classList.add("project-picker-list__container");

    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-clipboard-list");

    const text = document.createElement("p");
    text.textContent = project.name;
    text.classList.add("project-picker-list__text");

    container.append(icon, text);
    if (appState.get().selectedProject === project) {
      const check = document.createElement("i");
      check.classList.add("fas", "fa-check");
      container.append(check);
    }
    listItem.append(container);
    projectList.append(listItem);
  }
  const projectButton = document.getElementById("project-picker");
  projectButton.append(projectList);
  return projectPicker;
};

export { projectPicker };
