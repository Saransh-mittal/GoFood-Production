# GoFood Web Application

Welcome to GoFood, a full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js) stack using Vite as the bundler. GoFood allows users to explore a variety of food items, add them to their cart, proceed to checkout, and view their order history.

## Features

- **Food List:** Browse through a comprehensive list of delicious food items available.
- **Add to Cart:** Easily add your favorite food items to the shopping cart.
- **Checkout:** Complete the ordering process by checking out from the cart.
- **Order History:** View a list of your past orders for reference.

## Technologies Used

- **MongoDB:** Database for storing food items and order information.
- **Express.js:** Backend framework for handling server-side logic.
- **React:** Frontend library for building the user interface.
- **Node.js:** JavaScript runtime for server-side execution.
- **Vite:** Fast, modern frontend build tool.
- **Azure VM:** Hosted on Azure Virtual Machine at [20.197.54.78](http://20.197.54.78).

## Getting Started

To run the GoFood application locally, follow these steps:

**Clone the repository:**

```bash
git clone https://github.com/your-username/gofood.git
Install dependencies for both the client and server:

bash
Copy code
cd gofood/client
npm install

cd ../server
npm install
Set up the MongoDB connection. Ensure you have a running MongoDB instance, and update the connection string in server/config/db.js.

Start the server:

bash
Copy code
cd server
npm start
Start the client:

bash
Copy code
cd ../client
npm run dev
Visit http://localhost:3000 in your browser to explore the GoFood web application.

Deployment
The GoFood application is hosted on an Azure Virtual Machine. You can access it at http://20.197.54.78.

Contributing
If you'd like to contribute to GoFood, please follow our contribution guidelines.
