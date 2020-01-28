//original API URL
const queryURL = 'https://rickandmortyapi.com/api/character/';
var score = 0;
var correctAnswer2;
var correctAnswer6;
var correctAnswer8;
var counter = 0;

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
    const charAnswer1 = response.results[10].origin.name;

    const locAnswer1 = response.results[0].origin.name;
    console.log(response.results[0].origin.name , 'Location question 1'); // Location Question 1

    console.log(response.results[13].location.name , ' location question 2'); //Location Question 2
    const locAnswer2 = response.results[13].location.name;

    console.log(response.results[2].origin.name , 'location question 3');//location question 3
    const locAnswer3 = response.results[2].origin.name;

;

    //Call for Rick Answer
    $.ajax({
      url: 'https://rickandmortyapi.com/api/character?name=rick',
      method: 'GET'
    })
    .then (function(rickResponse){
      console.log(rickResponse.info.count, ' character question 2'); //Character Question 2 
      //varibles for Answer
      charAnswer2 = rickResponse.info.count ;
    ;

      //Call for Morty Answer
      $.ajax({
        url: 'https://rickandmortyapi.com/api/character?name=morty',
        method: 'GET'
      })
      .then (function(mortyResponse){
        console.log(mortyResponse.info.count, 'chacter question 3'); //Character Question 3
        //varibles for Answer
        charAnswer3 = mortyResponse.info.count ;
;

        //Call for episode questions
        $.ajax({
          url: 'https://rickandmortyapi.com/api/episode?=S01',
          method: 'GET'
        })
        .then (function(epResponse){
          console.log(epResponse.results[0].air_date, 'Date Question 1'); //Date Question 1
          console.log(epResponse.info.count , 'Date question 2'); // Date Question 2
          //varibles for Answer
          epQuestion1 = epResponse.results[0].air_date;
          epQuestion2 = epResponse.info.count;

        ;



//display total at end of quiz

//make user input all lowercase
//make answer all lowercase

//compare user answer to correct answer
$('#submit').click(function(){
    var userAnswer = '';
    userAnswer = $('#answer').val();
    if (userAnswer == correctAnswer2){
      score = score + 200;
      console.log(score);
      $('#answer').val('');

     }
      else if (userAnswer == correctAnswer6)
     {
       score = score + 600;
       console.log(score);
       $('#answer').val('');
     }
      else if (userAnswer == correctAnswer8){
       score = score + 800;
       console.log(score);
       $('#answer').val('');
      }
      else {
        score = score;
        console.log(score);
        $('#answer').val('');
      }
      console.log(counter);
});

//array for character questions
var chrArray = [
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
var locArray = [
    {
      title: "What planet is Rick Sanchez from?",
      //pull answer from api
      answer: locAnswer1  //Earth (C-137)
      
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
var randomArray = [
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

//pass questions to HTML
//functions for displaying questions
$(function () {
  $('#parentChar2').click(function(){
    counter = counter + 1;
    $('#parentChar2').unbind();
     $("#char2").text(chrArray[0].title);
     correctAnswer2 = chrArray[0].answer;
     $('#parentChar2').addClass('has-background-success');
  });
  $('#parentPlace2').click(function(){
      counter = counter + 1;
      $('#parentPlace2').unbind();
      $('#place2').text(locArray[0].title);
      correctAnswer2 = locArray[0].answer;
      $('#parentPlace2').addClass('has-background-success');
  });
  $('#parentRandom2').click(function(){
    counter = counter + 1;
      $('#parentRandom2').unbind();
      $('#random2').text(randomArray[0].title);
      correctAnswer2 = randomArray[0].answer;
      $('#parentRandom2').addClass('has-background-success');
  });
  $('#parentChar6').click(function(){
      counter = counter + 1;
      $('#parentChar6').unbind();
      $('#char6').text(chrArray[1].title);
      correctAnswer6 = chrArray[1].answer;
      $('#parentChar6').addClass('has-background-success');
  });
  $('#parentPlace6').click(function(){
      counter = counter + 1;
      $('parentPlace6').unbind();
      $('#place6').text(locArray[1].title);
      correctAnswer6 = locArray[1].answer;
      $('#parentPlace6').addClass('has-background-success');
  });
  $('#parentRandom6').click(function(){
      counter = counter + 1;
      $('#parentRandom6').unbind();
      $('#random6').text(randomArray[1].title);
      correctAnswer6 = randomArray[1].answer;
      $('#parentRandom6').addClass('has-background-success');
  });
  $('#parentChar8').click(function(){
      counter = counter + 1;
      $('#parentChar8').unbind();
      $('#char8').text(chrArray[2].title);
      correctAnswer8 = chrArray[2].title;
      $('#parentChar8').addClass('has-background-success');
  });
  $('#parentPlace8').click(function(){
      counter = counter + 1;
      $('#parentPlace8').unbind();
      $('#place8').text(locArray[2].title);
      correctAnswer8 = locArray[2].answer;
      $('#parentPlace8').addClass('has-background-success');
  });
  $('#parentRandom8').click(function(){
      counter = counter + 1;
      $('#parentRandom8').unbind();
      $('#random8').text(randomArray[2].title);
      correctAnswer8 = randomArray[2].answer;
     $('#parentRandom8').addClass('has-background-success');
  
  });
  
});
  });
    });
      });
        }); 

         
  


//once complete show final score
