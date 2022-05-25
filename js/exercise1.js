let myQuestions=[
    {
        question : "01. what is 10/2 ?",
        answers:{
            a: '3',
            b: '4',
            c: '5'
        },
        correctAnswer: 'c'
    },
    {
        question: "02. What is 30/3?",
        answers: {
          a: '3',
          b: '5',
          c: '10'
        },
        correctAnswer: 'c'
      },
      {
        question: "03. The opposite of onmouseover is_____?",
        answers: {
          a: 'onmouseoff',
          b: 'onmouseout',
          c: 'onmouseunder',
        },
        correctAnswer: 'b'
      }
];
let quiz = document.querySelector('#quiz');
let result = document.querySelector('#results');
let submit = document.querySelector('#submit');

Quiz(myQuestions,quiz,result,submit)
function Quiz(myQuestions,quiz,result,submit){
    function showQuestions(myQuestions,quiz){
        let output=[];
        let answers;
        for(let i =0; i < myQuestions.length;i++){
            answers=[];
            for(letter in  myQuestions[i].answers ){
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'+" "
                    + letter + ' : '
                    + myQuestions[i].answers[letter]
                    + '</label>' +" "
                  );
                }

            output.push(
                '<div class="question">' + myQuestions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
              );
        }
        quiz.innerHTML=output.join('');
        
    }

    
    function showResults(myQuestions, quiz, result) {
        var answerContainers = quiz.querySelectorAll('.answers');
        var userAnswer = '';
        var numCorrect = 0;
        for (var i = 0; i < myQuestions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

          if (userAnswer === myQuestions[i].correctAnswer) {
         
            numCorrect++;
    
            answerContainers[i].style.color = 'rgb(15, 167, 81)';
          }
        
          else {
          
            answerContainers[i].style.color = 'rgb(145, 17, 17)';
          }
        }
          
        result.innerHTML = numCorrect + ' out of ' + myQuestions.length;
      }
    showQuestions(myQuestions,quiz)
    submit.onclick = function (){
        showResults(myQuestions,quiz,result)
    }
 }

 function reload(){
     location.reload();
 }
