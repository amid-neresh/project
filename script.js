'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberFilms() {
  for (let i = 0; i < 2; i++) {
    let lastWatch = prompt('Один из последних просмотреных фильмов?', '');
    let movieReiting = +prompt('На сколько оцените его?', '');
    if (
      lastWatch != null &&
      movieReiting != null &&
      lastWatch != '' &&
      movieReiting != '' &&
      lastWatch.length < 50
    ) {
      personalMovieDB.movies[lastWatch] = movieReiting;
    } else {
      i--;
    }
  }
}
// rememberFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов');
  } else if (10 <= personalMovieDB.count <= 30) {
    alert('Вы класический зритель');
  } else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

// detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

// showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();

