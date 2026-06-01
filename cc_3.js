// Coding Challenge 03a - Customer Records Tracker

// 
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

// new customer added after
customers.push({
  name: "David Lee",
  email: "david@example.com",
  purchases: ["Webcam"]
});

customers.shift(); // removes Alice Johnson (the first customer)

// added new purchase
customers[0].email = "brian.smith@newmail.com"; // update Brian's email
customers[0].purchases.push("Phone Case");      // add a purchase for Brian

// Loop through the array to display each customer's info
customers.forEach((customer) => {
  console.log(
    `Name: ${customer.name} | Email: ${customer.email} | Total Purchases: ${customer.purchases.length}`
  );
});
