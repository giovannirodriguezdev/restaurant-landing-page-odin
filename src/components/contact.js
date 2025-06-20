function createContactPage() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = ""; // Clear existing content

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";
  headline.classList.add("contact-headline");

  const address = document.createElement("p");
  address.textContent = "123 Main Street, Anytown, CA 90210";
  address.classList.add("contact-info");

  const phone = document.createElement("p");
  phone.textContent = "Phone: (555) 123-4567";
  phone.classList.add("contact-info");

  const email = document.createElement("p");
  email.textContent = "Email: info@wonderfulrestaurant.com";
  email.classList.add("contact-info");

  contentDiv.appendChild(headline);
  contentDiv.appendChild(address);
  contentDiv.appendChild(phone);
  contentDiv.appendChild(email);
}

export { createContactPage };
