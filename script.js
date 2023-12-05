'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
// console.log(personalMovieDB);

let lastWatch1 = prompt('Один из последних просмотреных фильмов?', '');
let movieReiting1 = +prompt('На сколько оцените его?', '');
let lastWatch2 = prompt('Один из последних просмотреных фильмов?', '');
let movieReiting2 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastWatch1] = movieReiting1;
personalMovieDB.movies[lastWatch2] = movieReiting2;

console.log(personalMovieDB);
