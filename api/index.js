const nova = require('novaxjs2');
const path = require('path');
const fs = require('fs');
const app = nova();
const port = 3000;

const css = fs.readFileSync(path.join(__dirname, '../public/style.css'));
const indexHtml = fs.readFileSync(path.join(__dirname, '../public/index.html'));
const view = fs.readFileSync(path.join(__dirname, '../public/view.html'));
const add = fs.readFileSync(path.join(__dirname, '../public/add.html'));

// Set global styles
app.style = css;

// Handle GET request to show the to-do list page
app.get('/', (req, res) => {
  return indexHtml;
});

app.get('/view', async (req, res) => {
  return await view;
});
app.get('/add', (req, res) => {
  return add;
});

// Start the server
app.at(port, () => {
  console.log(`App is running on https://localhost:${port}`);
});
module.exports = app;
