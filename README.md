# The Ultimate MVC structure

This structure I have been busy with for a couple of days and should allow you to quickly get up to speed in the development in MVC applications. 
I myself have deployed this on a nodejs application inside of my cPanel which was a success.

## Features

- TypeScript for type safety and modern JavaScript features.
- EJS for dynamic HTML rendering.
- SCSS for modular and maintainable styles.
- Hot-reloading with Nodemon for a smooth development experience.
- Debugging support for TypeScript files.

## Project Structure

```
root
├── src
│   ├── app.ts               # Entry point of the application
│   ├── routes               # Contains route definitions
│   ├── controllers          # Contains request handling logic
│   ├── models               # Contains data models or interfaces
│   └── utils                # Contains utility functions
├── public
│   ├── css                  # Compiled CSS files
│   ├── js                   # Client-side JavaScript files
│   └── assets               # Static assets (images, fonts)
├── views
│   ├── layouts              # Main layout templates
│   ├── partials             # Reusable partial templates
│   └── pages                # Page-specific templates
├── scss                     # SCSS stylesheets
├── config                   # Configuration files
├── .vscode                  # VS Code settings for debugging
├── nodemon.json             # Nodemon configuration for hot-reloading
├── tsconfig.json            # TypeScript configuration
├── package.json             # NPM configuration
└── README.md                # Project documentation
```

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd the-ultimate-nodejs-mvc
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   Simply press f5 and deploy it on the local machine with debugger attached
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to see the application in action.

## Development

- Use `nodemon` for hot-reloading during development.
- Set breakpoints in your TypeScript files for debugging.
- Modify SCSS files in the `scss` directory to update styles.

## License

This project is licensed under the MIT License.
