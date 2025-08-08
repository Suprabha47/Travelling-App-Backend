🌍 Travel App Backend

  This is the backend for the Travel App, built with Node.js, Apollo Server (GraphQL), and MongoDB.
  It provides APIs for user management, trips, bookings, and payments.


🚀 Features

  User Authentication – Sign up, log in.
  Trip Management – Create, update, delete, and fetch trips.
  Booking System – Users can book trips.
  Payment Handling – Store and manage payment details.
  MongoDB with Mongoose – For schema-based data modeling.
  GraphQL – Flexible querying and mutations using Apollo Server.
  Environment Configurations – Uses .env for secure credentials.
  Error Handling – Centralized error handling for consistent responses.


🛠 Tech Stack

  Node.js – Runtime environment
  Apollo Server (GraphQL) – API layer
  MongoDB Atlas – Cloud database
  Mongoose – MongoDB ODM
  dotenv – Environment variables
  @graphql-tools/merge – Merging typeDefs & resolvers


📂 Project Structure
```
backend/
│
├── db/
│   └── db.connect.js        # MongoDB connection
│
├── graphql/
│   ├── index.js             # Merge typeDefs and resolvers
│   ├── typedefs/
│   │   ├── userTypedefs.js
│   │   ├── tripTypedefs.js
│   │   ├── bookingTypedefs.js
│   │   └── paymentTypedefs.js
│   └── resolvers/
│       ├── userResolvers.js
│       ├── tripResolvers.js
│       ├── bookingResolvers.js
│       └── paymentResolvers.js
│
├── models/
│   ├── userModel.js
│   ├── tripModel.js
│   ├── bookingModel.js
│   └── paymentModel.js
│
├── .env                     # Environment variables
├── package.json
├── server.js                # Entry point
└── README.md
```


⚙️ Installation

Clone the repository
```
git clone https://github.com/Suprabha47/Travelling-App-Backend.git
cd travel-app-backend
```

Install dependencies
```
npm install
```

Create .env file
```
PORT=4000
MONGODB_CONNECT=your_mongodb_connection_string
```

Start the server

```
npm run dev
```


📌 GraphQL API Overview
Once the server is running, visit:
```
http://localhost:4000
```
in your browser to open Apollo Sandbox for interactive GraphQL queries.

Example Queries:
Fetch All Trips
```
query {
  trips {
    id
    title
    price
    destination
  }
}
```

Create a Trip

```
mutation {
  createTrip(input: {
    title: "Mountain Adventure"
    description: "A scenic mountain trip"
    price: 299
    destination: "Himalayas"
  }) {
    id
    title
    price
  }
}
```

🧑‍💻 Development Scripts
Script	Description
```
npm run dev	  //  Starts the server in development mode with nodemon
npm start     //	Starts the server in production mode
```

