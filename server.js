const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

// Basic route to test the server
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Route to serve lineup changes
app.get("/api/lineup-changes", (req, res) => {
  res.sendFile(path.join(__dirname, "data", "lineup_changes.json"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
