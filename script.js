'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

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



if (personalMovieDB.count < 10) {
  alert('Просмотренно довольно мало фильмов');
} else if (10 <= personalMovieDB.count <= 30) {
  alert('Вы класический зритель');
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}
console.log(personalMovieDB);
