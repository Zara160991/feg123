"use strict";

const countOfFilms = +prompt("Քանի ֆիլմ եք վերջերս դիտել");
const DB = {
    count: countOfFilms,
    movies: {},
    actors: {},
    genrer: [],
    status: null,
    privat: false
};

const a = prompt("Որ ֆիլմն եք վերջերս դիտել");
const b = prompt("Ինչքան եք գնահատում այդ ֆիլմը");
const c = prompt("Որ ֆիլմն եք վերջերս դիտել");
const d = prompt("Ինչքան եք գնահատում այդ ֆիլմը");

DB.movies[a] = b;
DB.movies[c] = d; 

console.log(DB)
