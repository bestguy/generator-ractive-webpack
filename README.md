# Ractive Webpack Yeoman generator

![Dependency Tracker](https://img.shields.io/david/bestguy/generator-ractive-webpack.svg "Dependency Tracker") 
![Dependency Tracker](https://img.shields.io/david/dev/bestguy/generator-ractive-webpack.svg "Dev Dependency Tracker")

**RactiveJS application boilerplate with routing, internationalized text, date formatting, animations, pubsub, etc.**

Develop with ES2015, Webpack, and hot reloading - all the good stuff from React development, without using React and JSX :-P

(You can also build on the Node.js development server to be full API or application server.)

Full list of a few of my *favorite things*:

* [ES6 (via BabelJS)](http://babeljs.io/)
* [Ractive](http://www.ractivejs.org/)
* [Webpack](http://webpack.github.io)
* [i18next](http://i18next.com/)
* [lodash](https://lodash.com/docshttps://github.com/chjj/marked)
* [markdown-it](https://markdown-it.github.io)
* [Moment.js](http://momentjs.com/)
* [xhttp](https://github.com/Mitranim/xhttp)
* [Ractive-route](https://github.com/MartinKolarik/ractive-route)
* [Animate.css](https://daneden.github.io/animate.css/)
* [Bootstrap](http://getbootstrap.com/)
* [Font-Awesome](http://fontawesome.io/)

----

## Installation

Install yeoman and generator-ractive-webpack:

```bash
npm install -g yo
npm install -g generator-ractive-webpack
```

## Setting up new projects

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


## Install & Run:

### For development bundle and hot reloading:

    npm install
    npm start

Open: [http://localhost:3000](http://localhost:3000)

### For production bundle:

    npm dist

The minified `public/bundle.js` file can be deployed on a CDN, your host, or deployed with the node.js server at:

    npm start
Open: [http://localhost:3000](http://localhost:3000)

---