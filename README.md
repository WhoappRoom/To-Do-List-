
# Novaxjs2 Framework

Nova is a lightweight and flexible web framework for Node.js. It simplifies the process of creating HTTP servers, handling routes, middleware, static files, and more.

## Features

- **Route Handling**: Define routes using GET, POST, PUT, and DELETE methods.
- **Middleware Support**: Add custom middleware for request handling.
- **Static File Serving**: Easily serve static files using the `serveStatic` method.
- **Custom Error Handling**: Define error handlers to catch and manage exceptions.
- **Customizable Styles**: Use a `<style>` tag to apply custom styles to responses.
- **File-based Route Handling**: Utilize the `sendFile` method to return file contents directly.

## Installation

To use Nova in your project:
   ```bash
   ```bash
   npm install novaxjs2
   ```

 Import Nova in your application:
   ```javascript
   const Nova = require('novaxjs2');
   ```

## Usage

### Creating the Server

```javascript
const Nova = require('novaxjs2');

const app = new Nova();

// Define routes
app.get('/', (req, res) => {
    return '<h1>Welcome to Nova Framework!</h1>';
});

// Start the server
app.at(3000, () => {
    console.log('Server is running on port 3000');
});
```

### Middleware

You can use middleware like this:

```javascript
app.useMiddleware((req, res, next) => {
    console.log(`Request Method: ${req.method} - URL: ${req.url}`);
    next();
});
```

### Serving Static Files

```javascript
app.serveStatic('public');
```

This will allow Nova to serve static files located in the 'public' directory automatically.

### Error Handling

Define a custom error handler:

```javascript
app.error((err, req, res, next) => {
    res.writeHead(500, { "Content-Type": "text/html" });
    return `<h1>Error: ${err.message}</h1>`;
});
```
```javascript
const nova = require('novaxjs2');
const path = require('path');
const fs = require('fs');
const app = nova();
const port = 3000;

const css = fs.readFileSync(path.join(__dirname, '../public/style.css'));
const indexHtml = fs.readFileSync(path.join(__dirname, '../public/index.html'));
const view = fs.readFileSync(path.join(__dirname, '../public/view.html'));
const add = fs.readFileSync(path.join(__dirname, '../public/add.html'));

// Set global styles this style will be all pages under (app)
app.style = css;

// Handle GET request to show the home page
app.get('/', (req, res) => {
  return indexHtml;
});

app.get('/view', (req, res) => {
  return view;
});
app.get('/add', (req, res) => {
  return add;
});

// Start the server
app.at(port, () => {
  console.log(`App is running on https://localhost:${port}`);
});
module.exports = app;

```
## API Reference

- `get(path, handler)`: Define a GET route.
- `post(path, handler)`: Define a POST route.
- `put(path, handler)`: Define a PUT route.
- `delete(path, handler)`: Define a DELETE route.
- `style`: Use this to set custom CSS styles.
- `useMiddleware(middleware)`: Add middleware to the request handling chain.
- `serveStatic(directory)`: Serve static files from the specified directory.
- `error(handler)`: Handle errors with a custom error handler.
- `sendFile(filePath, res)`: Send file content directly to the response.
- `at(port, callback)`: Start the server and listen on the specified port.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
