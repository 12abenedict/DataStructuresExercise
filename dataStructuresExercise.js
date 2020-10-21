// 1

const jedi =[];
jedi [jedi.length] = "Luke";
jedi.push("Obi-Wan Kenobi");
jedi.unshift("Yoda");
console.log(jedi[1]);
jedi.splice(2, 1);
jedi.splice(0, 1);
console.log(jedi);

// 2

const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);
console.log(starWarsVillians.slice(0, 2));

// 3

const droids ={
    droidsYoureLookingFor: {astromech:"R2-D2", protocol:"C-3PO", assassin:"IG-88"}
};
console.log(droids["droidsYoureLookingFor"]["astromech"]);
console.log(droids.droidsYoureLookingFor.protocol);
droids.droidsYoureLookingFor.assassin = "IG-11";

// Bonus
// 4
console.log(sithLords[0][6]);
// 5
console.log(sithLords.slice(-2, -1));
// 6

const starWarsMovies = {
    // chronologically
    firstTrilogy: {episodeOne: "The Phantom Menace", episodeTwo: "Attack of the Clones", episodeThree: "Revenge of the Sith"},
    secondTrilogy: {episodeFour: "A New Hope", episodeFive: "The Empire Strikes Back", episodeSix: "Return of the Jedi"},
    thirdTrilogy: {episodeSeven: "The Force Awakens", episodeEight: "The Last Jedi", episodeNine: "Rise of Skywalker"}
};

console.log(starWarsMovies);






