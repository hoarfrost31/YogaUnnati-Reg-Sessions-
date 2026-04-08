const toggles = document.querySelectorAll(".faq-toggle");
const panels = document.querySelectorAll(".faq-panel");

const closeAll = () => {
  panels.forEach((panel) => {
    panel.style.maxHeight = "0px";
  });
  document.querySelectorAll(".faq-icon").forEach((icon) => {
    icon.classList.remove("rotate-180");
  });
};

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const panel = toggle.parentElement.querySelector(".faq-panel");
    const icon = toggle.querySelector(".faq-icon");
    const isOpen = panel.style.maxHeight && panel.style.maxHeight !== "0px";

    closeAll();

    if (!isOpen) {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      icon.classList.add("rotate-180");
    }
  });
});

if (window.lucide) {
  window.lucide.createIcons();
}
