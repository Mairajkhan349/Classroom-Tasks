//                     // Assignment 3: Company Product Catalog
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
console.log("\n\t\t\t\tAssignment 3: Company Product Catalog\t\t\n");
let inventory = [
    { name: "Laptop", model: "HP", cost: 500, quantity: 10 },
    { name: "Mobile", model: "Samsung", cost: 700, quantity: 5 },
    { name: "TV", model: "Sony", cost: 850, quantity: 3 },
];
console.log(`Product 1:-
The ${inventory[0].model} ${inventory[0].name}, priced at ${inventory[0].cost}$, combines top-tier performance and sleek design, available in a limited quantity of ${inventory[0].quantity} units. `);
console.log(`\nProduct 2:-
Introducing the ${inventory[1].model} ${inventory[1].name}, a premium smartphone priced at $${inventory[1].cost} with cutting-edge technology and sleek design, available in a limited quantity of only ${inventory[1].quantity} units.`);
console.log(`\nProduct 3:-
${inventory[2].model} ${inventory[2].name} model, priced at $${inventory[2].cost} with ${inventory[2].quantity} units available, offers stunning visuals, exceptional sound quality, and advanced features.`);
export {};
