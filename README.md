# react-forcefield

[![Greenkeeper badge](https://badges.greenkeeper.io/coston/react-forcefield.svg)](https://greenkeeper.io/)
[![Coverage Status](https://coveralls.io/repos/github/coston/react-forcefield/badge.svg?branch=master)](https://coveralls.io/github/coston/react-forcefield?branch=master)
[![npm package version](https://badge.fury.io/js/react-forcefield.svg)](https://www.npmjs.com/package/react-forcefield)
[![npm downloads](https://img.shields.io/npm/dm/react-forcefield.svg)](https://www.npmjs.com/package/react-forcefield)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

Prevent unintentional interactions(scroll, zoom, etc) until click or touch.

## Documentation

* [Demo & Examples](#demo--examples)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)

## Demo & Examples
Live demo: [react-forcefield.coston.io](https://react-forcefield.coston.io)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8080`](http://localhost:8080) in a browser.

## Installation

The easiest way to use react-forcefield is to install it from npm and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-forcefield.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-forcefield --save
```

## Usage

To use, `import Forcefield from 'react-forcefield`, wrap some code in the  `<Forcefield>` component, and voilà!

```jsx
import React from 'react'
import Forcefield from 'react-forcefield'

const Example = () => (
  <Forcefield>
    <iframe
      src="http://oira.ua.edu/maps/ache/"
      style={{ border: '1px #eee solid' }}
      name="myiFrame"
      scrolling="no"
      height="800px"
      width="100%"
      allowFullScreen
    />
  </Forcefield>
)
```


## Contributing

Please help make this component better. All issues and/or pull requests are very welcome. 

## License

MIT License
