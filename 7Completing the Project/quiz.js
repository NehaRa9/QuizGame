const quesJSON = [
  {
    correctAnswer: 'Object',
    options: ['null', 'object ', 'undefined', 'number'],
    question:
      "console.log(typeof null);",
  },
  {
    correctAnswer: 'false',
    options: [
      'true',
      'false',
      'NaN',
      'TypeError',
    ],
    question:
      "console.log(0.1 + 0.2 === 0.3);",
  },
  {
    correctAnswer: 'true',
    options: [
     'true',
      'false',
      'NaN',
      'TypeError',
    ],
    question:
      'console.log([1] == true);',
  },
  {
    correctAnswer: 'object',
    options: [
     'null', 'object ', 'undefined', 'number'
    ],
    question: 'console.log(typeof NaN);',
  },
  {
    correctAnswer: '11',
    options: [
      '2',
      '11',
      '1',
      'NaN',
    ],
    question:
      "console.log(1 + '1');?",
  },
];
   
    let score=0;
    let currentQuestion = 0;
    const totalScore = quesJSON.length;

    //Accessing all the elements:
    const questionEl = document.getElementById("question");
    const optionEl = document.getElementById("options");
    const scoreEl = document.getElementById("score");
    const nextEl = document.getElementById('next');
    showQuestion();
    
    nextEl.addEventListener('click', ()=>{
      scoreEl.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestion();
    } );

    function showQuestion(){
       // Destructuring the object
     const{correctAnswer, options, question} = quesJSON[currentQuestion];

      //Setting question text content
    questionEl.textContent = question; 
    
    const shuffledOptions = shuffleOptions(options);
    
        //Populating the Options div with the buttons.
        shuffledOptions.forEach((opt) => {
          const btn = document.createElement('button');
          btn.textContent = opt;
          optionEl.appendChild(btn);
  
      // Event handling on the button:
      btn.addEventListener("click", () => {
          if(opt === correctAnswer){
              score++;
          }
          else{
              score=score-0.25;
          }
          scoreEl.textContent = `Score: ${score} / ${totalScore}`;   
       nextQuestion();
          });
      });
  }

  function nextQuestion(){
    currentQuestion++;
    optionEl.textContent = '';
    if(currentQuestion>=quesJSON.length){
      questionEl.textContent = 'Quiz Completed!!';
      nextEl.remove();
    } 
    else{
      showQuestion();
    }

  }

//Shuffling the Options
function shuffleOptions(options) {
    for (let i = options.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * i + 1);
      [options[i], options[j]] = [
        options[j],
        options[i],
      ];
    }
    return options;
  }
  
//   shuffleOptions([1, 2, 3, 4, 5]);