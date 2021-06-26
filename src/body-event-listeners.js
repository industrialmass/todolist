import { makePopup } from "./makers/make-popup";
import { makeProject } from "./make-project";
import { projects } from "./project-list";
import { appState } from "./state";

const bodyEventListeners = (() => {
  const body = document.body;

  body.addEventListener("click", (event) => {
    const collapse = document.getElementById("project-header");
    if (collapse && collapse.contains(event.target)) {
      const projectList = document.getElementById("project-list-container");
      const hidden = projectList.style.display === "none";
      projectList.style.display = hidden ? "block" : "none";

      const chevron = document.getElementById("collapse");
      chevron.style.animation = hidden ? "unrotate 0.25s" : "rotate 0.25s";
      setTimeout(() => {
        chevron.style.transform = hidden ? "rotate(0)" : "rotate(-0.25turn)";
      }, 200);
    }

    const add = document.getElementById("project-add");
    if (add && add.contains(event.target)) {
      document.getElementById("dark-screen").append(makePopup());
      document.getElementById("dark-screen").style.display = "flex";
    }

    const cancel = document.getElementById("popup-cancel");
    if (cancel && cancel.contains(event.target)) {
      document.getElementById("popup").remove();
      document.getElementById("dark-screen").style.display = "none";
    }

    const submit = document.getElementById("popup-submit");
    if (submit && submit.contains(event.target)) {
      const project = makeProject();
      projects.add(project);
      document.getElementById("popup").remove();
      document.getElementById("dark-screen").style.display = "none";
    }
  });

  body.addEventListener("input", (event) => {
    const name = document.getElementById("name-input");
    if (name && name.contains(event.target)) {
      appState.set({ popup: { description: name.value } });
    }
  });
})();

export { bodyEventListeners };
