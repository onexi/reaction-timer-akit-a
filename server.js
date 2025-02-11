const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

// temp faster record
let bestTime = Infinity;

// Save the fatesr record
app.post('/record', (req, res) => {
  const reactionTime = req.body.time;
  if (reactionTime < bestTime) {
    bestTime = reactionTime;
    console.log('New best time:', bestTime);
    res.json({ success: true, message: 'New best time recorded!' });
  } else {
    res.json({ success: false, message: 'Not a best time.' });
  }
});

// Obatin faster record
app.get('/record', (req, res) => {
  res.json({ bestTime });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
