// vvvvv Darkmode vvvvv aber warum bleibt Light mode im text ? //
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

  if (bodyElement.classList.contains("dark")) {
    toggleButton.textContent = "Light mode";
  } else {
    toggleButton.textConent = "Dark mode";
  }
});

//vvvvv Toggle svg-color switch first questioncard vvvvv //
const buttonBookmark = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');

buttonBookmark?.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("active");
});

//vvvvv Toggle hidden answer vvvvv warum bleibt Hide Answer???//
const answerButton = document.querySelector('[data-js="answer-button"]');
const answerHide = document.querySelector('[data-js="answer-js"]');

answerButton?.addEventListener("click", () => {
  answerHide.classList.toggle("show");

  if (answerHide.classList.contains("show")) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textConent = "Show Answer";
  }
});
