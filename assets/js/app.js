/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');
require('../css/profile.css');
require('../css/bootstrap.css');

const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
require('bootstrap');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


//IMAGES:

const logoM = require('../images/TheCodeKitchen_Logo-M.png');
const logoS = require('../images/TheCodeKitchen_Logo-S.png');
const scrollBackgnd = require('../images/thecodekitchen_scrollable_greyscale.png');

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
