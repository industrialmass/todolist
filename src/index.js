import { projects } from "./project-list";
import { load } from "./load";
import { taskEditor } from "./makers/task-editor";
import { appState } from "./state";
import { makeToDo } from "./make-to-do";
import { toDoList } from "./to-do-list";
import { projectPicker } from "./makers/project-picker";
import { priorityPicker } from "./makers/priority-picker";
import datepicker from "js-datepicker";
import { resetTaskEditor } from "./reset-task-editor";
import { bodyEventListeners } from "./body-event-listeners.js";
import { closeOldEditor } from "./helpers/dom-functions";
import { taskButton } from "./components/task-button";
import { ulToDoList } from "./components/ul-to-do-list";

load();

const main = document.getElementById("main");

// Event delegation; click handler
main.addEventListener("click", (event) => {
  // Events for the initial "Add task" button
  // Creates a task editor form
  if (taskButton.contains(event.target)) {
    taskButton.remove();
    closeOldEditor();
    main.append(taskEditor());
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
  else if (projectPickerButton && projectPickerButton.contains(event.target)) {
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
    closeOldEditor();
    return;
  }

  // Events for the submit button
  // Submits the form data and closes the task editor
  const submit = document.getElementById("submit");
  if (submit && submit.contains(event.target)) {
    const input = document.getElementById("input");
    const toDo = makeToDo();
    toDoList.add(toDo);

    input.value = null;
    const list = document.getElementById("todolist");
    if (list) list.remove();
    main.append(ulToDoList());

    // Clean up the task editor
    const taskEditor = document.getElementById("task-editor");
    taskEditor.remove();
    appState.reset();
    main.append(taskButton);
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
    const list = document.querySelectorAll(".todolist__item");
    for (const item of list) {
      if (item.contains(event.target)) {
        // If a task editor already exists, close it
        closeOldEditor();

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
    }
  }

  const save = document.getElementById("save");
  if (save && save.contains(event.target)) {
    const state = appState.get();
    toDoList.update(state.itemID);
    closeOldEditor();
  }
});

// Event delegation; input handler
main.addEventListener("input", (event) => {
  // We should update the state every time we take in input,
  // but we don't need to rerender.
  const input = document.getElementById("input");
  if (input && input.contains(event.target)) {
    appState.set({ typedValue: input.value });
  }
});
