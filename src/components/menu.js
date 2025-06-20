function createMenuPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear existing content

    const headline = document.createElement('h1');
    headline.textContent = "Our Delicious Menu";
    headline.classList.add('menu-headline');

    const menuItems = [
        { name: "Spaghetti Carbonara", description: "Classic Roman pasta dish with eggs, hard cheese, cured pork, and black pepper.", price: "$18" },
        { name: "Margherita Pizza", description: "Traditional Neapolitan pizza, topped with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and olive oil.", price: "$20" },
        { name: "Grilled Salmon", description: "Fresh Atlantic salmon, perfectly grilled and served with seasonal vegetables.", price: "$25" }
    ];

    menuItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;
        itemPrice.classList.add('menu-price');

        menuItemDiv.appendChild(itemName);
        menuItemDiv.appendChild(itemDescription);
        menuItemDiv.appendChild(itemPrice);
        contentDiv.appendChild(menuItemDiv);
    });
}

export { createMenuPage };
