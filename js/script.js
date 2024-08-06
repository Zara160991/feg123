"use strict";

const DB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    status: null,
    privat: false,
    init() {
      DB.count = +prompt("Քանի ֆիլմ եք վերջերս դիտել");
    
      while (DB.count == "" || DB.count == null || isNaN(DB.count)) {
        DB.count = +prompt("Քանի ֆիլմ եք վերջերս դիտել");
      }
    },
    rememberAndCreateUserFilms() {
      for (let i = 0; i < 2; i++) {
        const filmName = prompt("Որ ֆիլմ եք վերջերս դիտել");
        const filmRate = +prompt(`Ինչքան եք գնահատում ${filmName} ֆիլմը`);
    
        if (filmName != null && filmRate != null  && filmName != "" && filmRate != "" &&  filmName.length < 50) {
            DB.movies[filmName] = filmRate; 
            console.log("Resolve");
     } else {
            console.log("Reject");
            i--;
        }
    }
    
    },

    detectUserPersonalLevel() {
  if (DB.count < 10) {
    DB.status = "Դուք դիտել եք բավականին քիչ ֆիլմեր";
  } else if (DB.count >= 10 && DB.count < 30) {
    DB.status = "Դուք դասական ֆիլմ դիտող եք";  
  } else if (DB.count >= 30) {
   DB.status = "Դուք կինոման եք !"
  } else {
      console.log("Տեղի է ունեցել խնդիր․");
  }
  
    },
    checkDBPrivatStatus(state) {
  state ? console.log("Sorry but DB is not visible") : console.log(DB);
    },
    userFavoriteGenres() {
   for (let i = 0; i < 2; i++) {
     DB.genres.push(prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`))
   }
    },
    startApp() {
      DB.init();
      DB.rememberAndCreateUserFilms();
      DB.userFavoriteGenres();
      DB.detectUserPersonalLevel();
      DB.checkDBPrivatStatus(DB.privat);
    }
   };

   DB.startApp();




