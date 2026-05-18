const shell = document.querySelector(".app-shell");
const themeToggle = document.querySelector("#theme-toggle");
const devicePreview = document.querySelector(".device-preview");
const segments = document.querySelectorAll(".segment");
const textScale = document.querySelector("#text-scale");
const scaleLabel = document.querySelector("#scale-label");
const solidToggle = document.querySelector("#solid-toggle");
const contrastToggle = document.querySelector("#contrast-toggle");
const densityToggle = document.querySelector("#density-toggle");
const search = document.querySelector("#search");
const statusItems = document.querySelectorAll(".status-item");
const swatches = document.querySelectorAll(".swatch");
const sheet = document.querySelector("#settings-sheet");
const navSheet = document.querySelector("#nav-sheet");
const openSheet = document.querySelector("#open-sheet");
const moreSettings = document.querySelector(".more-settings");
const menuToggle = document.querySelector("#menu-toggle");
const shuffleStatus = document.querySelector("#shuffle-status");
const doneButton = document.querySelector("#done-button");
const navLinks = document.querySelectorAll(".nav-item, .bottom-tabs a");
const sheetNavLinks = document.querySelectorAll(".sheet-nav a");

const labels = ["Regular", "Large", "Extra Large"];
const scales = ["1", "1.08", "1.16"];
const themes = ["system", "light", "dark"];
let themeIndex = 0;

function setActiveLink(hash) {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === hash);
  });
}

themeToggle.addEventListener("click", () => {
  themeIndex = (themeIndex + 1) % themes.length;
  shell.dataset.theme = themes[themeIndex];
  themeToggle.setAttribute("aria-label", `Appearance: ${themes[themeIndex]}`);
});

segments.forEach((segment) => {
  segment.addEventListener("click", () => {
    segments.forEach((item) => {
      item.classList.remove("is-selected");
      item.setAttribute("aria-selected", "false");
    });
    segment.classList.add("is-selected");
    segment.setAttribute("aria-selected", "true");
    devicePreview.dataset.currentDevice = segment.dataset.device;
  });
});

textScale.addEventListener("input", () => {
  const value = Number(textScale.value);
  document.documentElement.style.setProperty("--type-scale", scales[value]);
  scaleLabel.textContent = labels[value];
});

solidToggle.addEventListener("change", () => {
  shell.classList.toggle("is-solid", solidToggle.checked);
});

contrastToggle.addEventListener("change", () => {
  shell.classList.toggle("is-contrast", contrastToggle.checked);
});

densityToggle.addEventListener("change", () => {
  shell.dataset.density = densityToggle.checked ? "compact" : "regular";
});

swatches.forEach((swatch) => {
  swatch.addEventListener("click", () => {
    swatches.forEach((item) => item.classList.remove("is-selected"));
    swatch.classList.add("is-selected");
    document.documentElement.style.setProperty("--accent", swatch.dataset.accent);
  });
});

search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  statusItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    const tags = item.dataset.tags.toLowerCase();
    item.classList.toggle("is-hidden", query.length > 0 && !text.includes(query) && !tags.includes(query));
  });
});

openSheet.addEventListener("click", () => {
  if (typeof sheet.showModal === "function") {
    sheet.showModal();
  }
});

moreSettings.addEventListener("click", () => {
  if (typeof sheet.showModal === "function") {
    sheet.showModal();
  }
});

menuToggle.addEventListener("click", () => {
  if (typeof navSheet.showModal === "function") {
    navSheet.showModal();
  }
});

sheetNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navSheet.close();
    setActiveLink(link.getAttribute("href"));
  });
});

shuffleStatus.addEventListener("click", () => {
  const current = devicePreview.dataset.currentDevice;
  const next = current === "mac" ? "ipad" : current === "ipad" ? "iphone" : "mac";
  const target = document.querySelector(`[data-device="${next}"]`);
  target.click();
});

doneButton.addEventListener("click", () => {
  doneButton.textContent = "Done";
  window.setTimeout(() => {
    doneButton.textContent = "Done";
  }, 1300);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setActiveLink(link.getAttribute("href")));
});

window.addEventListener("hashchange", () => {
  setActiveLink(window.location.hash || "#overview");
});

window.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    search.focus();
  }
});
