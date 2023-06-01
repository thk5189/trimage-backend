// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());

// // Define your routes here

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());

// // Database connection
// mongoose
//   .connect('mongodb://localhost/trimage', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to the database');
//   })
//   .catch((err) => {
//     console.error('Error connecting to the database:', err);
//   });

// // Define your routes here

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

////

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Database connection
// mongoose.connect('mongodb://localhost/trimko', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to the database');
// })
// .catch((err) => {
//   console.error('Error connecting to the database:', err);
// });

// // Routes
// const userRoutes = require('./routes/userRoutes');
// const photoRoutes = require('./routes/photoRoutes');
// const albumRoutes = require('./routes/albumRoutes');

// app.use('/api', userRoutes);
// app.use('/api', photoRoutes);
// app.use('/api', albumRoutes);

// // Start the server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
require("dotenv").config();
const {PORT} = process.env;
const express= require("express");
const app = express();
const routes = require('./routes/index')
const cors = require('cors')

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors('*')); // to prevent cors errors, open access to all origins
app.use(express.urlencoded({extended: true}))
app.use(express.json()); // parse json bodies


app.use("/", routes);

app.use((req, res) => {
  res.status(404).json({message: "NOT A PROPER ROUTE"})
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));