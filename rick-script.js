//variable for each type of call
const charcterCall = 'https://rickandmortyapi.com/api/character/';
const locationCall = 'https://rickandmortyapi.com/api/location/';
const epCall = 'https://rickandmortyapi.com/api/episode/';

const queryURL = 'https://rickandmortyapi.com/api/character/';

//create ajax call
$.ajax({
    url:queryURL,
    method: 'GET'
})
.then(function(response){
    //logging out the response
    console.log(response);
});
//array for questions

//console logging answers
console.log(response.info);

//array for character questions
const chrArray = [
    {
      title: "What planet was Albert Einstein from? ",
      //pull answer from api
      answer: " " //Earth (C-137)
    },
    {
      title: "How many Ricks were there in Seasons 1 & 2? ",
      //pull answer from api
      answer: " " //count 73
    },
    {
      title: "How many Mortys are there in Seasons 1 & 2? ",
      //pull answer from api
      answer: " " //count 44
    },

];
//array for locations questions
const locArray = [
    {
      title: "What planet is Rick Sanchez from?",
      //pull answer from api
      answer: " " //Earth (C-137)
    }, 
    {
      title: "What planet are the cat-people from?",
      //pull answer from api
      answer: " " //Purge Planet
    },
    { 
      title: "What dimension is Snuffles Dream in? ",
      //pull answer from api
      answer: " " //C-137
    },
];
// Array to get random questions
const randomArray = [
    {
      title: "What year did the pilot release?",
     //pull answer from api
      answer: " " //2013
    },
    {
      title: "How many episodes were there in season 1? ",
      //pull answer from api
      answer: " "  //11
    },
    {
      title: "Are there more male or female characters in Seasons 1 and 2? ",
      //pull answer from api
      answer: " " //count male = 371 female = 74
    },

];
//pass questions to HTML

//submit answer to check
$('button').on('click', function(event){
    //variable for user answer
    const answer = $('.submitbox').val().trim();

});
//array for answers
const usrAnswer = [];
//array for user input answer
//compare user answer to correct answer
//track score
const score = '';
//once complete show final score