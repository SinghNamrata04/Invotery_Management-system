// Item object constructor
function Item(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

// Inventory array to store items
const inventory = [];

// Function to add an item to the inventory
function addItem(inventory, item) {
    inventory.push(item);
}

// Function to update an item in the inventory
function updateItem(inventory, id, newDetails) {
    const itemIndex = inventory.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        inventory[itemIndex] = { ...inventory[itemIndex], ...newDetails };
    }
}

// Function to delete an item from the inventory
function deleteItem(inventory, id) {
    const itemIndex = inventory.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        inventory.splice(itemIndex, 1);
    }
}

// Function to display the inventory
function displayInventory(inventory) {
    const output = document.getElementById('output');
    output.innerHTML = `<pre>${JSON.stringify(inventory, null, 2)}</pre>`;
}

// Main program
function main() {
    // Initialize the inventory with some items
    addItem(inventory, new Item(1, 'Laptop', 10, 1500));
    addItem(inventory, new Item(2, 'Phone', 20, 800));
    addItem(inventory, new Item(3, 'Tablet', 15, 600));

    // Display the initial inventory
    displayInventory(inventory);

    // Add a new item
    addItem(inventory, new Item(4, 'Headphones', 25, 200));
    displayInventory(inventory);

    // Update an existing item
    updateItem(inventory, 2, { name: 'Smartphone', quantity: 18, price: 850 });
    displayInventory(inventory);

    // Delete an item
    deleteItem(inventory, 1);
    displayInventory(inventory);
}

// Run the main program
main();
