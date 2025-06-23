function createHomePage() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = ""; // Clear existing content

  const heroSection = document.createElement("section");
  heroSection.classList.add("hero-section");

  const heroContent = document.createElement("div");
  heroContent.classList.add("hero-content");

  const heroImage = document.createElement("img");
  heroImage.src = "https://i.postimg.cc/xdYTHkcf/logo.png";
  heroImage.classList.add("restaurant-image");

  const heroHeadline = document.createElement("h1");
  heroHeadline.textContent = "Food from your favorite animated series";
  heroHeadline.classList.add("hero-headline");

  heroContent.appendChild(heroImage);
  heroContent.appendChild(heroHeadline);
  heroSection.appendChild(heroContent);

  const recipeSectionsContainer = document.createElement("div");
  recipeSectionsContainer.classList.add("recipe-sections-container");

  const recipeH1 = document.createElement("h1");
  recipeH1.textContent = "Recipes";
  recipeH1.classList.add("recipe-h1");

  const recipesData = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0272/5629/1416/files/IMG_3925_480x480.jpg?v=1683337055",
      title: "Onigiri",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0272/5629/1416/files/IMG_3932_480x480.jpg?v=1683337174",
      title: "Curry Rice",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0272/5629/1416/files/IMG_3940_480x480.jpg?v=1683337290",
      title: "Katsu Don",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0272/5629/1416/files/IMG_3949_480x480.jpg?v=16833374140",
      title: "Oyakodon",
    },
  ];

  recipesData.forEach((recipe) => {
    const recipeCard = document.createElement("article");
    recipeCard.classList.add("recipe-card");

    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.title;
    recipeImage.classList.add("recipe-card-image");

    const recipeTitle = document.createElement("h2");
    recipeTitle.textContent = recipe.title;
    recipeTitle.classList.add("recipe-card-title");

    const viewRecipeButton = document.createElement("button");
    viewRecipeButton.textContent = "View Recipe";
    viewRecipeButton.classList.add("view-recipe-button");

    recipeCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeTitle);
    recipeCard.appendChild(viewRecipeButton);

    recipeSectionsContainer.appendChild(recipeCard);
  });


  contentDiv.appendChild(heroSection);
  contentDiv.appendChild(recipeH1)
  contentDiv.appendChild(recipeSectionsContainer);
}

export { createHomePage };
