const groceryItems = [
  { name: "Apples", category: "Fruits", price: 1.5, available: true },
  { name: "Milk", category: "Dairy", price: 2.0, available: true },
  { name: "Bread", category: "Bakery", price: 1.0, available: false },
  { name: "Carrots", category: "Vegetables", price: 1.2, available: true },
  { name: "Cheese", category: "Dairy", price: 2.5, available: true },
  { name: "Bananas", category: "Fruits", price: 1.1, available: true },
];

const listContainer = document.getElementById("groceryList");
const filter = document.getElementById("categoryFilter");

function renderItems(category = "all") {
  listContainer.innerHTML = "";
  const filteredItems = groceryItems.filter(item =>
    category === "all" ? true : item.category === category
  );

  filteredItems.forEach(item => {
    const itemCard = document.createElement("div");
    itemCard.className = "item";
    itemCard.innerHTML = `
      <h3>${item.name}</h3>
      <p><strong>Category:</strong> ${item.category}</p>
      <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
      <p class="${item.available ? 'available' : 'out-of-stock'}">
        ${item.available ? 'In stock' : 'Out of stock'}
      </p>
    `;
    listContainer.appendChild(itemCard);
  });
}

filter.addEventListener("change", () => {
  renderItems(filter.value);
});

renderItems();
