const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express();

// Enable express to accept / parse urlencoded & json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Tell Express which routes to extend /api/goals to
app.use('/api/goals', require('./routes/goalRoutes'));

// Changed error handler from default
app.use(errorHandler)

// Server Start
app.listen(port, () => console.log(`Server started on port ${port}`));
