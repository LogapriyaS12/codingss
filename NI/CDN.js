// Import required modules
const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS, images) from the 'public' folder
app.use(express.static('public'));

// Define the route for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
