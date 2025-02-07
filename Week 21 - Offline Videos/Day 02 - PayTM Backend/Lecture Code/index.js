// Express module ko import kar rahe hai
const express = require('express');

// CORS (Cross-Origin Resource Sharing) enable karne ke liye import kar rahe hai
const cors = require('cors');

// Routes import kar rahe hai
const rootRouter = require('./routes/index');

// Express ka ek instance bana rahe hai
const app = express();

// CORS middleware ko use kar rahe hai
app.use(cors());

// JSON body parse karne ke liye middleware use kar rahe hai
app.use(express.json());

// Sabhi routes `/api/v1` ke andar honge
app.use("/api/v1", rootRouter);

// Yeh code server ko port 5000 par start hoga
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});