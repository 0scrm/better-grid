# Better grid: light, responsive and friendly CSS grid system

**Version 1.3.2**

## Table of contents
1. [Installation guide](#installation-guide)
2. [What's included](#whats-included)
3. [How it works](#how-it-works)
4. [Documentation](#documentation)
5. [Support for old browsers](#support-for-old-browsers)

## Installation guide

Several options are available depending on your needs :

### I want the whole thing:

- [Download the latest release.](https://github.com/oscar-marion/better-grid/archive/v1.3.2.zip)
- Clone the repo: `git clone https://github.com/oscar-marion/better-grid.git`
- run `npm install` or `yarn install`
- Once all the dependencies installed, run `gulp`to compile the sass

### I need the uncompiled version (sass):

- Download the latest version of [better-grid.scss](https://github.com/oscar-marion/better-grid/blob/master/sass/better-grid.scss)

### Nah, just give me the compiled css file!

- You'll find a ready-to use [better-grid.css](https://github.com/oscar-marion/better-grid/blob/master/build/better-grid.css) right here, you lazy.

## What's included

Every website needs a layout system: [Bootstrap](https://github.com/twbs/bootstrap) provides a very complete one, and so does every CSS framework on this planet. If you don't want to use any framework but you still need a great layout system, I might have what you're looking for. **Better grid** offers nothing but a light-weight layout system, based on css grid.

Within the download you'll find the following directories and files, one uncompiled version, and one compiled & minified version :

```text
better-grid/
└── sass/
    ├── better-grid.scss
└── build/
    ├── better-grid.css
└── gulpfile.js
```

## Documentation

Better grid is based on grillade, the layout system of KNACSS framework. 

You'll find the complete guide here : [knacss.com/doc.html#grids](https://www.knacss.com/doc.html#grids)

## Support for old browsers

Even with auto-prefixer on and with a lot of good will, Internet Explorer is always full of (bad) suprises. **better grid** has a fallback for browsers down to IE 9. Want to go further back in time? Well, instead of writing dozens of CSS lines to fix your layout, just ask yourself: how retro-compatible does my website need to be for my customers?

**According to W3Counter, in January 2019 :**
```
--------------------------
| Browser | Global usage |
|------------------------|
|  IE 8   |     0.3%     |
|------------------------|
|  IE 9   |      1%      | 
|------------------------|
|  IE10   |     0.2%     |
|------------------------|
|  IE11   |     2.8%     |
--------------------------
```
