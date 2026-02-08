document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".tab-buttons");

  container.addEventListener("click", (e) => {

    const clickedTab = e.target.closest(".tab");
    if (!clickedTab) return;

    const targetId = clickedTab.dataset.tab;
    const targetContent = document.getElementById(targetId);
    if (!targetContent) return;

    document.querySelectorAll(".tab").forEach(tab => {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
    });

    document.querySelectorAll(".tab-content").forEach(content => {
      content.classList.remove("active");
    });

    clickedTab.classList.add("active");
    clickedTab.setAttribute("aria-selected", "true");
    targetContent.classList.add("active");

  });

});
