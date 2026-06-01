// Coding Challenge 03a - Customer Records Tracker

// Step 2: Create the customers array with at least three customer objects
let customers = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    purchases: ["Laptop", "Wireless Mouse"]
  },
  {
    name: "Brian Smith",
    email: "brian@example.com",
    purchases: ["Headphones"]
  },
  {
    name: "Carla Diaz",
    email: "carla@example.com",
    purchases: ["Monitor", "Keyboard", "USB-C Cable"]
  }
];

// Step 3: Add a new customer with .push() and remove the first with .shift()
customers.push({
  name: "David Lee",
  email: "david@example.com",
  purchases: ["Webcam"]
});

customers.shift(); // removes Alice Johnson (the first customer)

// Step 4: Update an existing customer's email and add a new purchase
customers[0].email = "brian.smith@newmail.com"; // update Brian's email
customers[0].purchases.push("Phone Case");      // add a purchase for Brian

// Step 5: Loop through the array and display each customer's info
customers.forEach((customer) => {
  console.log(
    `Name: ${customer.name} | Email: ${customer.email} | Total Purchases: ${customer.purchases.length}`
  );
});
