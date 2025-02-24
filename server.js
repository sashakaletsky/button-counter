const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

let count = 0; // In-memory counter (resets when server restarts)

// Serve static files only from the 'public' folder (prevents Railway from serving everything)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get the current count
app.get('/count', (req, res) => {
    res.json({ count });
});

// API endpoint to increment the count
app.post('/increment', (req, res) => {
    count++;
    res.json({ count });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
