// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for GET /comments/:id
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id
// 7. Start the web server
// 8. Test the web server
// 9. Push the code to GitHub
// 10. Deploy to Heroku

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const comments = [
  { id: 1, author: 'John', text: 'A comment' },
  { id: 2, author: 'Dave', text: 'Another comment' },
  { id: 3, author: 'John', text: 'Another comment from John' }
];

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// 3. Create a route for POST /comments
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1

