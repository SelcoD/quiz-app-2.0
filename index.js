const bodyElement = document.querySelector('[data-js="body"]');
const profileCardElement = document.querySelector('[data-js="profile-card"]');
const headerElement = document.querySelector('[data-js="header"]');
const navbarElement = document.querySelector('[data-js="navbar"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

toggleButton?.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  headerElement.classList.toggle("dark");
  navbarElement.classList.toggle("dark");
  profileCardElement.classList.toggle("dark");
});
