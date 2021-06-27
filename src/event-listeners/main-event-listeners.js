import { projects } from "../data/project-list";
import { taskEditor } from "../makers/task-editor";
import { appState } from "../state";
import { makeToDo } from "../data/make-to-do";
import { toDoList } from "../data/to-do-list";
import { projectPicker } from "../makers/project-picker";
import { priorityPicker } from "../makers/priority-picker";
import datepicker from "js-datepicker";
import { resetTaskEditor } from "../helpers/reset-task-editor";
import { taskButton } from "../components/task-button";
import { renderPage } from "../render-page";

const mainEventListeners = () => {
  const main = document.getElementById("main");
  // Event delegation; click handler
  main.addEventListener("click", (event) => {
    // Events for the initial "Add task" button
    // Creates a task editor form
    if (taskButton.contains(event.target)) {
      taskButton.remove();
      appState.reset();
      console.log(appState.get());
      renderPage();
      document.getElementById("main").append(taskEditor());
      const date = document.getElementById("date");

      datepicker(date, {
        disableYearOverlay: true,
        minDate: new Date(),
        onSelect: (instance, day) => {
          appState.set({ selectedDate: day });
          resetTaskEditor();
        },
      });
    }

    // Events for the date selection button
    // Allows clicking on children of date button to activate the Calendar
    if (event.target.matches("#date > *, #date")) {
      event.stopPropagation();
    }

    // Events for the project picker dropdown
    const projectPickerList = document.getElementById("project-picker-list");
    const projectPickerButton = document.getElementById("project-picker");
    // This runs when selecting an item in the list
    if (projectPickerList && projectPickerList.contains(event.target)) {
      const projectListItems = document.querySelectorAll(
        ".project-picker-list__item"
      );
      for (const item of projectListItems) {
        if (item.contains(event.target)) {
          appState.set({ selectedProject: projects.getItemById(item.number) });
          resetTaskEditor();
          break;
        }
      }
    }
    // This closes the window if we click outside the list
    else if (projectPickerList && main.projectPickerOpen) {
      projectPickerList.remove();
      main.projectPickerOpen = false;
    }
    // This opens the list
    else if (
      projectPickerButton &&
      projectPickerButton.contains(event.target)
    ) {
      projectPicker(projects.get());
      main.projectPickerOpen = true;
    }

    // Events for the priority picker dropdown
    const priorityPickerButton = document.getElementById("priority-picker");
    const priorityPickerList = document.getElementById("priority-picker-list");
    if (priorityPickerList && priorityPickerList.contains(event.target)) {
      const priorityListItems = document.querySelectorAll(
        ".priority-picker-list__item"
      );
      for (const item of priorityListItems) {
        if (item.contains(event.target)) {
          appState.set({ selectedPriority: item.number });
          resetTaskEditor();
          break;
        }
      }
      priorityPickerList.remove();
    } else if (priorityPickerList && main.priorityPickerOpen) {
      priorityPickerList.remove();
      main.priorityPickerOpen = false;
    } else if (
      priorityPickerButton &&
      priorityPickerButton.contains(event.target)
    ) {
      priorityPicker();
      main.priorityPickerOpen = true;
    }

    // Events for the cancel button
    // Closes the task editor form without saving
    const cancel = document.getElementById("cancel");
    if (cancel && cancel.contains(event.target)) {
      renderPage();
      return;
    }

    // Events for the submit button
    // Submits the form data and closes the task editor
    const submit = document.getElementById("submit");
    if (submit && submit.contains(event.target)) {
      const state = appState.get();
      if (!state.typedValue) return;
      const toDo = makeToDo();
      toDoList.add(toDo);
      renderPage();

      return;
    }

    // Events for the remove buttons
    // Deletes the parent to-do list node
    if (
      event.target.matches(
        ".button--remove, .button--remove > *, .button--remove > * > *"
      )
    ) {
      const list = document.querySelectorAll(".todolist__item");
      for (const item of list) {
        if (item.contains(event.target)) {
          toDoList.remove(item.id);
          item.remove();
        }
      }
    }

    // Events for the edit buttons
    // Opens up an editor that allows modification of the data
    if (
      event.target.matches(
        ".button--edit, .button--edit > *, .button--edit > * > *"
      )
    ) {
      const oldItem = event.target.closest(".todolist__item");
      // If a task editor already exists, close it
      renderPage();

      const item = document.getElementById(oldItem.id);

      // Update the state with the relevant todo
      const todo = toDoList.getItemById(item.id);
      appState.set({
        typedValue: todo.description,
        selectedDate: todo.dueDate,
        selectedProject: todo.project,
        selectedPriority: todo.priority,
        type: "edit",
        itemID: todo.id,
      });

      // Create the editor
      const editor = taskEditor();
      item.replaceWith(editor);

      const date = document.getElementById("date");

      datepicker(date, {
        disableYearOverlay: true,
        minDate: new Date(),
        onSelect: (instance, day) => {
          appState.set({ selectedDate: day });
          resetTaskEditor();
        },
      });
    }

    const save = document.getElementById("save");
    if (save && save.contains(event.target)) {
      const state = appState.get();
      if (!state.typedValue) return;
      toDoList.update(state.itemID);
      renderPage();
    }

    if (event.target.matches(".todolist__side-buttons *")) {
      event.stopImmediatePropagation();
      const li = event.target.closest(".todolist__item");
      toDoList.toggleComplete(li.id);
      renderPage();

      console.log(toDoList.getItemById(li.id).complete);
    }
  });

  // Event delegation; input handler
  main.addEventListener("input", (event) => {
    // We should update the state every time we take in input,
    // but we don't need to rerender.
    const input = document.getElementById("input");
    if (input && input.contains(event.target)) {
      appState.set({ typedValue: input.value });

      // Logic for coloring and uncoloring buttons
      const submit = document.getElementById("submit");
      const save = document.getElementById("save");
      if (input.value) {
        if (submit) submit.classList.add("button--submit--ready");
        if (save) save.classList.add("button--submit--ready");
      }
      if (!input.value) {
        if (submit) submit.classList.remove("button--submit--ready");
        if (save) save.classList.remove("button--submit--ready");
      }
    }
  });
};

export { mainEventListeners };
