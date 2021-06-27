import { taskEditor } from "../makers/task-editor";
import { appState } from "../state";
import datepicker from "js-datepicker";

const resetTaskEditor = () => {
  const oldEditor = document.getElementById("task-editor");
  const state = appState.get();

  const editor = taskEditor(state);
  oldEditor.replaceWith(editor);

  const date = document.getElementById("date");

  datepicker(date, {
    disableYearOverlay: true,
    minDate: new Date(),
    onSelect: (instance, day) => {
      appState.set({ selectedDate: day });
      resetTaskEditor();
    },
  });
};

export { resetTaskEditor };
