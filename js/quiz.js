document.querySelector("#check_answers")
.addEventListener("click", function() {
    const answer1 = document.querySelector('input[name="question_1"]:checked').value;
    const correctAnswer1 = 'B';

    if(answer1===correctAnswer1) {
        document.querySelector(".question_1").style.backgroundColor = 'green';
//        alert('Верен отговор на въпрос 1');
    } else {
        document.querySelector(".question_1").style.backgroundColor = 'red';
//        alert('Грешен отговор на въпрос 1. Верният отговор е: '+correctAnswer1);
    }


    const answer2 = document.querySelector('input[name="question_2"]:checked').value;
    const correctAnswer2 = 'B';

    if(answer2===correctAnswer2) {
        document.querySelector(".question_2").style.backgroundColor = 'green';
    //    alert('Верен отговор на въпрос 2');
    } else {
        document.querySelector(".question_2").style.backgroundColor = 'red';
    //    alert('Грешен отговор на въпрос 2. Верният отговор е: '+correctAnswer2);
    }
});

document.querySelector("#reset")
.addEventListener("click", function() {
    document.querySelector(".question_1").style.backgroundColor = 'white';
    document.querySelector(".question_2").style.backgroundColor = 'white';
});