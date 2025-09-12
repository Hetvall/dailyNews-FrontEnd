# 📰 Daily News Full stack applicaction

A modern web application for managing and displaying daily news, built with Angular 20 and Bootstrap 5.

## 🚀 Features

- **Complete authentication** with guards and interceptors
- **Interactive dashboard** for news management
- **Responsive design** with Bootstrap 5
- **Modular architecture** with separation of concerns
- **Advanced routing** with lazy loading
- **Typed interfaces** with TypeScript

## 🛠️ Technologies

- **Angular 20.1.0** - Main framework
- **TypeScript 5.8.2** - Programming language
- **Bootstrap 5.3.7** - CSS framework
- **RxJS 7.8.0** - Reactive programming
- **Angular CLI 20.1.0** - Development tools

## 📋 Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (included with Node.js)
- [Angular CLI](https://angular.dev/tools/cli) globally installed

```bash
npm install -g @angular/cli
```

## 🚀 Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd daily-news-frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

```bash
# Copy the example file and configure the variables
cp src/app/environments/environment.example.ts src/app/environments/environment.ts
```

4. **Start the development server**

```bash
npm start
# or
ng serve
```

The application will be available at `http://localhost:4200/`

## 🎯 Available Scripts

| Command                        | Description                          |
| ------------------------------ | ------------------------------------ |
| `npm start`                    | Start development server             |
| `npm run build`                | Build the application for production |
| `npm run watch`                | Build in watch mode for development  |
| `npm test`                     | Run unit tests                       |
| `ng generate component <name>` | Generate a new component             |
| `ng generate service <name>`   | Generate a new service               |

## 🔧 Configuration

### Environment Variables

The project uses Angular's environment configuration system. You have two environment files:

- **`src/app/environments/environment.ts`** - Production configuration
- **`src/app/environments/environment.example.ts`** - Development template

#### Current Environment Configuration

```typescript
// src/app/environments/environment.ts
export const environment = {
  production: true,
  news_apiKey: "your-news-api-key-here",
};
```

#### Development Environment

For development, you can create a separate environment file or modify the existing one:

```typescript
// src/app/environments/environment.dev.ts
export const environment = {
  production: false,
  news_apiKey: "your-development-api-key",
};
```

#### Environment Setup Steps

1. **Copy the example file:**

```bash
cp src/app/environments/environment.example.ts src/app/environments/environment.ts
```

2. **Update the API key:**

   - Replace `'API_KEY'` with your actual News API key
   - Set `production: false` for development

3. **For different environments, you can:**
   - Create `environment.dev.ts` for development
   - Create `environment.prod.ts` for production
   - Update `angular.json` to use different files for different builds

### News API Configuration

This project integrates with a News API service. Make sure to:

1. **Get your API key** from [News API](https://newsapi.org/)
2. **Update the environment file** with your actual API key
3. **Keep your API key secure** - never commit it to version control

### Backend Configuration

If you have a backend API, configure the URL in your environment files:

```typescript
export const environment = {
  production: false,
  news_apiKey: "your-api-key",
  apiUrl: "http://localhost:3000/api", // Your backend URL
};
```

## �� Testing

```bash
# Run unit tests
npm test

# Run tests with coverage
ng test --code-coverage
```

## 🚀 Deployment

### Production Build

```bash
ng build --configuration production
```

Production files will be generated in the `dist/` folder.

### Environment-Specific Builds

You can create different build configurations in `angular.json`:

```json
"configurations": {
  "development": {
    "fileReplacements": [
      {
        "replace": "src/app/environments/environment.ts",
        "with": "src/app/environments/environment.dev.ts"
      }
    ]
  },
  "production": {
    "fileReplacements": [
      {
        "replace": "src/app/environments/environment.ts",
        "with": "src/app/environments/environment.prod.ts"
      }
    ]
  }
}
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify

```bash
# Build the project
ng build --configuration production

# Upload the dist/ folder to Netlify
```

## 🔒 Security Notes

- **Never commit API keys** to version control
- **Use environment variables** for sensitive data
- **Add environment files to .gitignore** if they contain secrets
- **Use different API keys** for development and production

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Code Conventions

- **Naming**: Use camelCase for variables and PascalCase for classes
- **Structure**: Follow the established folder structure
- **Comments**: Document complex functions
- **Commits**: Use descriptive messages in English

## 🐛 Reporting Bugs

If you find any bugs, please:

1. Check if it's not already reported in [Issues](../../issues)
2. Create a new issue with:
   - Detailed description of the problem
   - Steps to reproduce it
   - Screenshots if necessary
   - Environment information (browser, OS, etc.)

## �� License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## 👥 Authors

- **James Orozco** - _Full Stack Developer_ - [Hetvall](https://github.com/Hetvall)

## �� Acknowledgments

- Angular Team for the excellent framework
- Bootstrap for the UI components
- News API for the news data service
- Developer community for contributions

---

⭐ Thank you for reading!
