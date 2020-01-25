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

    //console logging answers
    console.log(response.results[10].origin.name, 'chacater question 1'); // Character Question 1
    //?name=rick
    console.log(response.info.count, ' character question 2'); //Character Question 2 
    //?name=morty
    console.log(response.info.count, 'chacter question 3'); //Character Question 3
    
    
    console.log(response.results[0].origin.name , 'Location question 1'); // Location Question 1
    console.log(response.results[13].location.name , ' location question 2'); //Location Question 2
    console.log(respnose.results[2].origin.name , 'location question 3');//location question 3

    //rickandmortyapi.com/api/episode
    console.log(response.id[1].air_date, 'date question 1');
    //https://rickandmortyapi.com/api/episode?episode=S01
    console.log(reponse.info.count , 'date question 2');
    



;


//array for questions


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
      title: "What is the location of Alien Morty?",
      //pull answer from api
      answer: " " //Citadel of Ricks
    },
    { 
      title: "What planet is Summer Smith from? ",
      //pull answer from api
      answer: " " //Earth (Replacement Dimension)
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