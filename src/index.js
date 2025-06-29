import { createHomePage } from "./components/home.js";
import { createRecipePage } from "./components/recipes.js";
import { createContactPage } from "./components/contact.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("home-btn");
  const recipeBtn = document.getElementById("recipe-btn");
  const contactBtn = document.getElementById("contact-btn");
  const contentDiv = document.getElementById("content");

  function setActiveButton(button) {
    homeBtn.classList.remove("active");
    recipeBtn.classList.remove("active");
    contactBtn.classList.remove("active");

    button.classList.add("active");
  }

  createHomePage();
  setActiveButton(homeBtn);

  homeBtn.addEventListener('click', () => {
    clearContent(contentDiv);
    createHomePage();
    setActiveButton(homeBtn);
  })

  recipeBtn.addEventListener("click", () => {
    clearContent(contentDiv);
    createRecipePage();
    setActiveButton(recipeBtn); // Set active after click
  });

  contactBtn.addEventListener("click", () => {
    clearContent(contentDiv);
    createContactPage();
    setActiveButton(contactBtn); // Set active after click
  });
});

function clearContent(element) {
  element.innerHTML = "";
}
