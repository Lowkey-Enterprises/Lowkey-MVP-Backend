const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// simple route to test server is working
app.get('/ping', (req, res) => {
  res.send('pong');
});

// TODO routes & middleware
// (i'll run a refresher myself & update with more details

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}...`);
});