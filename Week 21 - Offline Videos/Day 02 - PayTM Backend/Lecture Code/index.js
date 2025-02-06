const express = require('express');
const cors = require('cors');
const rootRouter = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});