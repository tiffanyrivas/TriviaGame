$(document).ready(function () {
    // start to declare your variables
    var correctA = 0;
    var incorrectA = 0;
    var timeRemaining = 11;
    var junk; // rememeber to set the intervals 
    var index = 0;
    var answered = false;
    var unanswered = 0;
    var correct;



    // we declared our variables now we start the list of objects in our variables
    var physicsGame = [{
        question: "What is a photon?",
        answer: ["Part of the atoms nucleus", "A quantum particle of light", "A subatomic particle with negative one charge", "A small ball"],
        correct: "1",
    }, {
        question: "Who won a Nobel Piece Prize for the photoelectic effect, but is known for their theory of relativity",
        answer: ["Niels Bohr", "John Bardeen", "Albert Einstein", "Marie Curie"],
        correct: "2",
    }, {
        question: "What is the derivative of a velocity function with respect to time?",
        answer: ["time", "velocity^2", "acceleration", "a what???"],
        correct: "2",
    }, {
        question: "If an object is in free fall, what is the only force that is acting upon that object?",
        answer: ["gravity", "normal force", "speed of light", "the sun"],
        correct: "0",
    }, {
        question: "Is Schrodinger's cat alive or dead?",
        answer: ["dead", "alive", "both", "why did he kill his cat?!?!??!"],
        correct: "2",
    }, {
        question: "You get in a fight and you punch their eye, but somehow your hand starts to look just as bad as their eye. What did you experience?",
        answer: ["revenge", "karma on your end", "Newtons Third Law of Motion", "Speed of Sound"],
        correct: "2",

    }, {
        question: "In most simplist form, how does an airplane fly?",
        answer: ["Idea of 'gravity' ", "With wings", "It has to be a windy day", "Idea of lift"],
        correct: "3",
    }, {
        question: "What is physics?",
        answer: ["Study of motion and matter through space and time", "Study of the Earth's tectonic plates", "Study of the composition, structure and properties of matter", "I don't know"],
        correct: "0",

    }];








    function startGame() {
        console.log("we started the game");

        $('.start-button').remove();
        incorrectA = 0;
        correctA = 0;
        
        unanswered = 0;
        loadGame();
    }

    function loadGame() {
        answered = false;
        timeRemaining = 11;

        junk = setInterval(timer, 1000);

        if (answered === false) {
            timer();
        }
        correct = physicsGame[index].correct;

        var question = physicsGame[index].question;

        $('.question').html(question); 

        for (var i = 0; i < 4; i++) {

            var answer = physicsGame[index].answer[i];

            $('.answers').append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
        }

        $("h4").click(function () {

            var id = $(this).attr('id');

            if (id === correct) {
                answered = true;
                $('.question').text("The answer is: " + physicsGame[index].answer[correct]);
                correctAnswer();
            } else {
                answered = true; 
                $('.question').text("You picked: " + physicsGame[index].answer[id] + ". While the answer is: " + physicsGame[index].answer[correct]);

                incorrectAnswer();
            }
        });
    }

    function timer() {
        if (timeRemaining === 0) {
            answered = true;

            clearInterval(junk);

            $('.question').text("Correct answer is: " + physicsGame[index].answer[correct]);
            unAnswered();


        } else if (answered === true) {



            clearInterval(junk);
        } else {
            timeRemaining--;
            $('.timeRemaining').text('You have ' + timeRemaining + ' seconds remaining!');
        }
    }

    function correctAnswer() {
        correctA++;
        $('.timeRemaining').text("Correct!").css({
            'color': 'pink'
        });
        resetRound();
    }

    function incorrectAnswer() {
        incorrectA++;

        $('.timeRemaining').text("Incorrect!").css({
            'color': 'red'
        });


        resetRound();

    }

    function unAnswered() {
        unanswered++;
        $('.timeRemaining').text("You did not answer in time...").css({
            'color': 'black'
        });
        resetRound();
    }

    function resetRound() {
        $('.answersAll').remove();
        index++; 

        if (index < physicsGame.length) {
            setTimeout(function () {
                loadGame();
            }, 5000); 

            //else we set our final scores 
        } else {
            setTimeout(function () {
                $('.question').remove();
                $('.timeRemaining').remove();
                $('.answers').append('<h4 class= answersAll end>Correct answers: ' + correctA + '</h4>');
                $('.answers').append('<h4 class= answersAll end>Incorrect answers: ' + incorrectA + '</h4>');
                $('.answers').append('<h4 class= answersAll end>Unanswered: ' + unanswered + '</h4>');
                setTimeout(function () {
                    location.reload();
                }, 7000);
            }, 5000);
        }
    };
// page needs to reload without refreshing the page 
    $('.startButton').on("click", function () {
        $('.startButton');
        startGame();

    });

});