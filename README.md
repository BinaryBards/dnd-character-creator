# Rapid D&D

The fast AI character sheet generator that you deserve!

## Table of Contents

- [📚 Additional Resources](docs/additional-resources.md)
- [📡 API Layer](docs/api-layer.md)
- [💻 Application Overview](docs/application-overview.md)
- [🔐 Authentication](docs/authentication.md)
- [🧱 Components and Styling](docs/components-and-styling.md)
- [🗃️ Database](docs/database.md)
- [🌐 Deployment](docs/deployment.md)
- [⚙ Github Workflow](docs/github-workflow.md)
- [🗄️ Project Structure](docs/project-structure.md)
- [🧪 Testing](docs/testing.md)
- [📁 Typescript](docs/typescript.md)

## Running Locally

This application was developed using Node v16 and NPM v8

```bash
git clone https://github.com/BinaryBards/dnd-character-creator
cd dnd-character-creator
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Known Issues

- all uses of `$` need to be escaped, `/$`, in the `.env` file -- [link to solution](https://github.com/vercel/next.js/issues/36691)

## VS Code Plugins

Here are some plugins that may help you navigate and increase your productivity while working with this repo:

- **Auto Rename Tag**: Automatically renames paired html/xml/jsx tags.
- **Better Comments**: Annotate and color highlight comments.
- **DotEnv**: Support for dotenv file syntax.
- **ESLint**: Integrates ESLint in JavaScript into VS Code.
- **GitHub Markdown Preview**: Preview Github md files in VS Code.
- **Prettier**: Code formatter.
- **Thunder Client**: Lightweight Rest API client for VS Code.
