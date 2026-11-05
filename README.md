# Plant Shop — Paradise Nursery

A React + Redux e-commerce application for Paradise Nursery, selling indoor and outdoor plants. 
Users can browse plants by category, add items to cart, adjust quantities, and checkout.

## Project Structure

```
plant-shop/
│
├── src/
│   ├── App.jsx          # Main application component with landing page
│   ├── App.css          # Styles with background image for landing page
│   ├── components/
│   │   ├── AboutUs.jsx  # About Paradise Nursery company
│   │   ├── CartItem.jsx # Individual cart item display
│   │   ├── CartSidebar.jsx # Cart sidebar with whole-cart total
│   │   ├── ProductList.jsx # Product listing page with categories
│   │   └── Navbar.jsx   # Navigation bar
│   └── redux/
│       └── CartSlice.jsx # Reducer: addItem, removeItem, updateQuantity
│
├── package.json
├── vite.config.ts
└── README.md            # This file