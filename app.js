const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple GET route
app.get('/', (req, res) => {
  res.send('Hello World! The second server is running.');
});

// A sample API endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'UP', message: 'Service is healthy' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});