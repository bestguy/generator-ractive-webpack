# Ractive Webpack Yeoman generator

![Dependency Tracker](https://img.shields.io/david/bestguy/generator-ractive-webpack.svg "Dependency Tracker") 
![Dependency Tracker](https://img.shields.io/david/dev/bestguy/generator-ractive-webpack.svg "Dev Dependency Tracker")

#### Includes

- ES2015 using [Webpack](https://webpack.github.io/) and [Babel](https://babeljs.io/)
- CSS with autoprefixing using [PostCSS](http://postcss.org/) 
- Development server and reloading using [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)
- Unit tests using [Mocha](https://mochajs.org/) and [assert](https://nodejs.org/api/assert.html)
- Headless browser tests using [Mocha](https://mochajs.org/) and [Nightmare](http://www.nightmarejs.org/)
- Linting using [ESLint](http://eslint.org/)
- Code coverage using [nyc](https://github.com/istanbuljs/nyc)

This generator is written in ES2015. This means it is ___not compatible with node.js versions before 4.0___.

---

## Installation
```bash
npm install -g yo
npm install -g generator-ractive-webpack
```

## Setting up projects

Create a new directory, and `cd` into it:

```bash
mkdir my-app
cd my-app
```

Run the generator

```
yo ractive-webpack
```
and follow the prompts

----

### Setup

    npm install

### Develop

    npm run
Open [http://localhost:3000](http://localhost:3000) in browser

- Uses [hot-module-replacement](https://webpack.github.io/docs/hot-module-replacement.html) to automatically rebuild and reload modules as the files under `public` are modified.

### Test

    npm test

- Runs unit tests using [Mocha](https://mochajs.org/)
- Runs headless browser tests using Mocha and [Nightmare](http://www.nightmarejs.org/)
- Shows code coverage using [nyc/Istanbul](https://github.com/istanbuljs/nyc).
  A coverage report will also be written in the `./coverage/` directory.

### Lint

    npm run lint

- Runs [ESLint](http://eslint.org/) using [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) as the base configuration
