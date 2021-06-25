const navEventListeners = (() => {
  const nav = document.getElementById("nav");

  let collapsed;

  nav.addEventListener("click", (event) => {
    const collapse = document.getElementById("project-header");
    if (collapse && collapse.contains(event.target)) {
      const projectList = document.getElementById("project-list");
      const hidden = projectList.style.display === "none";
      projectList.style.display = hidden ? "block" : "none";

      const chevron = document.getElementById("collapse");
      chevron.style.animation = hidden ? "unrotate 0.25s" : "rotate 0.25s";
      setTimeout(() => {
        chevron.style.transform = hidden ? "rotate(0)" : "rotate(-0.25turn)";
      }, 200);
    }
  });
})();

export { navEventListeners };
