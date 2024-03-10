const express = require('express');
const app = express();
const path = require('cors');

app.use(
    cors({
        origin: "http://localhost:3000"
    })
)
// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

// Catch all other routes and return the Angular app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
