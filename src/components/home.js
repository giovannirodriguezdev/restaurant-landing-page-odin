function createHomePage() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = ""; // Clear existing content

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to The Wonderful Restaurant!";
  headline.classList.add("home-headline"); // Add a class for styling

  const restaurantImage = document.createElement("img");
  restaurantImage.src =
    "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25105516/spirited_awaybr_disneyscreencaps.com_8513.jpg?quality=90&strip=all&crop=0,1.5782465272524,100,96.843506945495"; // Replace with your image path
  restaurantImage.alt = "A beautiful restaurant interior";
  restaurantImage.classList.add("restaurant-image"); // Add a class for styling

  const description = document.createElement("p");
  description.textContent =
    "Experience culinary delights in a cozy and inviting atmosphere. We offer a diverse menu crafted with the freshest local ingredients to satisfy every palate. Join us for an unforgettable dining experience!";
  description.classList.add("home-description"); // Add a class for styling

  contentDiv.appendChild(headline);
  contentDiv.appendChild(restaurantImage);
  contentDiv.appendChild(description);
}

export { createHomePage };
