import Vue from "vue"

let jQuery = require('jquery');

//Add the jQuery and $ to the window object
window.jQuery = window.$ = jQuery;

import '@popperjs/core'
import 'bootstrap'

require('./product.js');


// jQuery(document).ready(function(){
//   jQuery(".owl-carousel").owlCarousel();
// });

// var app = new Vue({
//     el: '#app',
//     data: {
//       message: 'Hello Vue!'
//     }
//   })