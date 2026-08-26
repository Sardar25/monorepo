const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // enable CORS for client requests
const port = process.env.PORT || 7000;
app.get('/', (req, res) => res.send('Hello from server'));

// Dummy data endpoint
app.get('/api/items', (req, res) => {
  const items = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' },
    { id: 3, name: 'Item Three' },
  ];
  res.json(items);
});

app.listen(port, () => console.log(`Server listening on ${port}`));
