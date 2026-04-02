// Keep footer year current across all pages.
const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

// Improve perceived load performance for image-heavy pages.
const allImages = document.querySelectorAll("img");
allImages.forEach((img) => {
  if (!img.hasAttribute("loading")) {
    img.setAttribute("loading", "lazy");
  }
  if (!img.hasAttribute("decoding")) {
    img.setAttribute("decoding", "async");
  }
  if (!img.hasAttribute("fetchpriority") && img.getAttribute("loading") === "lazy") {
    img.setAttribute("fetchpriority", "low");
  }
});

// Activate tabbed drink sections on the alcohols page.
const tabGroups = document.querySelectorAll("[data-tabs]");
tabGroups.forEach((group) => {
  const buttons = group.querySelectorAll("[data-tab-target]");
  const panels = group.querySelectorAll("[data-tab-panel]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab-target");

      buttons.forEach((btn) => {
        const isActive = btn === button;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach((panel) => {
        const isActive = panel.getAttribute("data-tab-panel") === target;
        panel.classList.toggle("active", isActive);
        panel.hidden = !isActive;
      });
    });
  });
});

// Rotate index hero background images with a fade transition.
const heroSections = document.querySelectorAll("[data-hero-slideshow]");
heroSections.forEach((hero) => {
  const slides = hero.querySelectorAll(".hero-slide");
  if (slides.length < 2) {
    return;
  }

  let currentIndex = 0;
  setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }, 4200);
});
