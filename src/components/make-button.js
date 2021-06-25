const makeButton = (parameters) => {
  const button = document.createElement("button");
  button.id = parameters.id;
  if (parameters.classes) button.classList.add(...parameters.classes);
  button.type = "button";

  if (parameters.icons && parameters.icons.length) {
    for (const icon of parameters.icons) {
      const element = document.createElement("i");
      if (icon.id) element.id = icon.id;
      element.classList.add(...icon.classes);
      button.append(element);
    }
  }
  if (parameters.description) {
    const text = document.createElement("p");
    text.textContent = parameters.description;
    text.classList.add(`text--${parameters.id}`);
    text.id = `text--${parameters.id}`;

    button.append(text);
  }

  return button;
};

export { makeButton };
