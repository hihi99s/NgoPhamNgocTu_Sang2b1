// 1. Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// 2. Create products array with at least 6 products
const products = [
    new Product(1, "Iphone 15 Pro Max", 35000000, 10, "Phone", true),
    new Product(2, "Samsung Galaxy S24", 25000000, 5, "Phone", true),
    new Product(3, "Macbook Air M2", 28000000, 0, "Laptop", false),
    new Product(4, "Sony WH-1000XM5", 8000000, 15, "Accessories", true),
    new Product(5, "Dell XPS 13", 45000000, 3, "Laptop", true),
    new Product(6, "Logitech MX Master 3S", 2500000, 20, "Accessories", true),
    new Product(7, "Airpods Pro 2", 5000000, 0, "Accessories", false)
];

console.log("--- 2. List of Products ---");
console.log(products);

// 3. Map: Create array of objects with only name and price
const nameAndPrice = products.map(p => ({
    name: p.name,
    price: p.price
}));
console.log("\n--- 3. Map (Name & Price) ---");
console.log(nameAndPrice);

// 4. Filter: Products with quantity > 0
const availableProducts = products.filter(p => p.quantity > 0);
console.log("\n--- 4. Filter (Quantity > 0) ---");
console.log(availableProducts);

// 5. Some: Is there any product with price > 30,000,000?
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("\n--- 5. Some (Price > 30,000,000) ---");
console.log("Has expensive product:", hasExpensiveProduct);

// 6. Every: Are all products in 'Accessories' category available?
const isAllAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable);
console.log("\n--- 6. Every (All Accessories are available?) ---");
console.log("Are all accessories available:", isAllAccessoriesAvailable);

// 7. Reduce: Calculate total inventory value (price * quantity)
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log("\n--- 7. Reduce (Total Inventory Value) ---");
console.log("Total Inventory Value:", totalInventoryValue);

// 8. For...of: Print product names
console.log("\n--- 8. For...of (Product Details) ---");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Available" : "Not Available"}`);
}

// 9. For...in: Print properties of the first product
console.log("\n--- 9. For...in (Properties of first product) ---");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

// 10. List products that are Available and Quantity > 0 (Bonus/Common requirement)
// Format as just names for easier reading
const purchasableProductNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

console.log("\n--- 10. Purchasable Products (isAvailable=true & quantity>0) ---");
console.log(purchasableProductNames);
