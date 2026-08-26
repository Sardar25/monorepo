const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors()); // enable CORS for client requests

const port = process.env.PORT || 7000;

// Path to client static export folder
const clientOutPath = path.join(__dirname, '../client/out');

// Serve static assets from Next.js export
app.use(express.static(clientOutPath));

// Dummy data endpoint
app.get('/api/items', (req, res) => {
  const items = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' },
    { id: 3, name: 'Item Three' },
  ];
  res.json(items);
});

// SPA wildcard fallback (handles all other routes, compatible with Express v5)
app.use((req, res) => {
  res.sendFile(path.join(clientOutPath, 'index.html'));
});

app.listen(port, () => console.log(`Server listening on ${port}`));
