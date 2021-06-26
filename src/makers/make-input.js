const makeInput = (id, placeholder) => {
  const input = document.createElement("input");
  input.type = "text";
  input.id = id;
  input.placeholder = placeholder;
  input.classList.add(`input--${id}`);

  return input;
};

export { makeInput };
