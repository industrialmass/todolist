import { makePopup } from "./makers/make-popup";
import { makeProject } from "./make-project";
import { projects } from "./project-list";
import { appState } from "./state";
import { ulProjectList } from "./components/ul-project-list";
import { closePopup } from "./helpers/dom-functions";
import { renderPage } from "./render-page";

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
      document
        .getElementById("dark-screen")
        .append(makePopup({ type: "submit" }));
      document.getElementById("dark-screen").style.display = "flex";
    }

    if (
      event.target.matches(
        ".button--remove, .button--remove > *, .button--remove > * > *"
      )
    ) {
      const projectListItems = document.querySelectorAll(".project-list__item");
      for (const item of projectListItems) {
        if (item.contains(event.target)) {
          projects.remove(item.id);
          break;
        }
      }
      document.getElementById("project-list").replaceWith(ulProjectList());
    }

    if (
      event.target.matches(
        ".button--edit, .button--edit > *, .button--edit > * > *"
      )
    ) {
      const projectListItems = document.querySelectorAll(".project-list__item");
      for (const item of projectListItems) {
        if (item.contains(event.target)) {
          const project = projects.getItemById(item.id);
          appState.set({
            popup: { id: project.id, description: project.description },
          });
          document
            .getElementById("dark-screen")
            .append(makePopup({ type: "edit" }));
          document.getElementById("dark-screen").style.display = "flex";
        }
      }
    }

    const cancel = document.getElementById("popup-cancel");
    if (cancel && cancel.contains(event.target)) {
      closePopup();
    }

    const submit = document.getElementById("popup-submit");
    if (submit && submit.contains(event.target)) {
      const project = makeProject();
      projects.add(project);

      closePopup();
      document.getElementById("project-list").replaceWith(ulProjectList());
    }

    const save = document.getElementById("popup-save");
    if (save && save.contains(event.target)) {
      projects.update(appState.get().popup.id);

      closePopup();
      document.getElementById("project-list").replaceWith(ulProjectList());
    }

    if (event.target.matches(".project-list__item, .project-list__item *")) {
      const li = event.target.closest(".project-list__item");
      renderPage({
        type: "project",
        project: projects.getItemById(li.id),
      });
    }
  });

  body.addEventListener("input", (event) => {
    const name = document.getElementById("name-input");
    if (name && name.contains(event.target)) {
      const id = appState.get().popup.id;
      appState.set({ popup: { description: name.value, id: id } });
    }
  });
})();

export { bodyEventListeners };
