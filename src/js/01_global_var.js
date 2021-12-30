'use strict';

console.log('>> Ready :)');
//Global variables
const searchBtn = document.querySelector('.js_searchBtn');
const resultsList = document.querySelector('.js-resultsList');
const inputField = document.querySelector('.js_searchInput');
const favList = document.querySelector('.js-favList');

const resetBtn = document.querySelector('.js_reset');
const PLACEHOLDER_URL =
  'https://via.placeholder.com/225x317ffffff/666666/?text=ANIME';

let moviesData = [];
let favMoviesData = [];
