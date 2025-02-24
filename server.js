const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

let count = 0; // In-memory counter (resets when server restarts)

// Serve static files from the current directory
app.use(express.static(__dirname));

// API endpoint to get the current count
app.get('/count', (req, res) => {
    res.json({ count });
});

// API endpoint to increment the count
app.post('/increment', (req, res) => {
    count++;
    res.json({ count });
});

// Serve index.html when visiting the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
