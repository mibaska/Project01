//variable for each type of call
// const charcterCall = 'https://rickandmortyapi.com/api/character/';
// const locationCall = 'https://rickandmortyapi.com/api/location/';
// const epCall = 'https://rickandmortyapi.com/api/episode/';

const queryURL = 'https://rickandmortyapi.com/api/character/';

//create ajax call
$.ajax({
    url:queryURL,
    method: 'GET'
})
.then(function(response){
    //logging out the response
    console.log(response);

     //varibles for Answers
    console.log(response.results[10].origin.name, 'chacater question 1'); // Character Question 1
    const charAnswer1 = response.reuslt[10].origin.name;

    console.log(response.results[0].origin.name , 'Location question 1'); // Location Question 1
    const locAnswer1 = response.results[0].origin.name;

    console.log(response.results[13].location.name , ' location question 2'); //Location Question 2
    const locAnswer2 = response.results[13].location.name;
    console.log(respnose.results[2].origin.name , 'location question 3');//location question 3
    const locAnswer3 = response.results[2].origin.name;

;

//Call for Rick Answer
$.ajax({
  url: 'https://rickandmortyapi.com/api/character?name=rick',
  method: 'GET'
})
.then (function(rickResponse){
  console.log(rickresponse.info.count, ' character question 2'); //Character Question 2 
  //varibles for Answer
  charAnswer2 = rickResponse.info.count ;
});

//Call for Morty Answer
$.ajax({
  url: 'https://rickandmortyapi.com/api/character?name=morty',
  method: 'GET'
})
.then (function(mortyResponse){
  console.log(mortyResponse.info.count, 'chacter question 3'); //Character Question 3
  //varibles for Answer
  charAnswer3 = mortyResponse.info.count ;
});

//Call for episode questions
$.ajax({
  url: 'https://rickandmortyapi.com/api/episode?=S01',
  method: 'GET'
})
.then (function(epResponse){
  console.log(ep1Response.id[1].air_date, 'Date Question 1'); //Date Question 1
  console.log(reponse.info.count , 'date question 2'); // Date Question 2
  //varibles for Answer
  epQuestion1 = epResponse.id[1].air_date;
  epQuestion2 = epResponse.info.count;

});

$.ajax({
  url: 'https://rickandmortyapi.com/api/episode?=',
  method: 'GET'
})
.then (function(ep1Response){
  console.log(ep1Response.id[1].air_date, 'Date Question 1'); //Date Question 1
  //varibles for Answer
  epQuestion1 = ep1Response.id[1].air_date ;
});

//array for questions


//array for character questions
const chrArray = [
    {
      title: "What planet was Albert Einstein from? ",
      //pull answer from api
      answer: charAnswer1 //Earth (C-137)
      
    },
    {
      title: "How many Ricks were there in Seasons 1 & 2? ",
      //pull answer from api
      answer: charAnswer2 //count 73
    },
    {
      title: "How many Mortys are there in Seasons 1 & 2? ",
      //pull answer from api
      answer: charAnswer3 //count 44
    },

];
//array for locations questions
const locArray = [
    {
      title: "What planet is Rick Sanchez from?",
      //pull answer from api
      answer: locAnswer1 //Earth (C-137)
    }, 
    {
      title: "What is the location of Alien Morty?",
      //pull answer from api
      answer: locAnswer2 //Citadel of Ricks
    },
    { 
      title: "What planet is Summer Smith from? ",
      //pull answer from api
      answer: locAnswer3 //Earth (Replacement Dimension)
    },
];
// Array to get random questions
const randomArray = [
    {
      title: "What year did the pilot release?",
     //pull answer from api
      answer: epQuestion1 //2013
    },
    {
      title: "How many episodes were there in season 1? ",
      //pull answer from api
      answer: epQuestion2 //11
    },
    {
      title: "Are there more male or female characters in Seasons 1 and 2? ",
      //pull answer from api
      answer: "female" //count male = 371 female = 74
    },

];


});
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