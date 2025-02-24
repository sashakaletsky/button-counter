const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

let count = 0; // In-memory counter (resets when server restarts)

// Middleware to parse JSON requests (fixes 404 on POST)
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// ✅ API endpoint to get the current count
app.get('/count', (req, res) => {
    res.json({ count });
});

// ✅ FIXED: Ensure Express correctly handles POST requests
app.post('/increment', (req, res) => {
    count++;
    console.log(`Count incremented: ${count}`); // Debugging log
    res.json({ count });
});

// ✅ Ensure Express correctly listens for incoming requests
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
