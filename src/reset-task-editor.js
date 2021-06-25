import { taskEditor } from "./components/task-editor";
import { taskEditorState } from "./state";
import datepicker from "js-datepicker";

const resetTaskEditor = () => {
  const oldEditor = document.getElementById("task-editor");
  const state = taskEditorState.get();

  const editor = taskEditor(state);
  oldEditor.replaceWith(editor);

  const date = document.getElementById("date");

  datepicker(date, {
    disableYearOverlay: true,
    minDate: new Date(),
    onSelect: (instance, day) => {
      taskEditorState.set({ selectedDate: day });
      resetTaskEditor();
    },
  });
};

export { resetTaskEditor };
