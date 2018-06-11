(function() {
  const myQuestions = [
    {
      question: "Har Merkur en måne?",
      answers: {
        a: "Ja",
        b: "Nej",
       
      },
      correctAnswer: "b"
    },
    {
      question: "Hvor mange dage tager det Venus at rotere om sin akse?",
      answers: {
        a: "243 døgn",
        b: "365 døgn",
       
      },
      correctAnswer: "a"
    },
    {
      question: "Hvor langt væk er Jorden fra solen i gennemsnit?",
      answers: {
        a: "150 mio. km i gennemsnit",
        b: "300 mio. km i gennemsnit",
       
      },
      correctAnswer: "a"
    },
	   {
      question: "Mars’ to måner hedder Phobos og Deimos. Hvad betyder disse græske ord?",
      answers: {
        a: "Kæmper og Guder",
        b: "Skræk og Rædsel",
       
      },
      correctAnswer: "b"
    },
	 {
      question: "Hvor mange jordkloder kan Jupiter rumme?",
      answers: {
        a: "1300",
        b: "500",
       
      },
      correctAnswer: "a"
    }, 
	  {
      question: "Hvad består Saturns ringe af?",
      answers: {
        a: "Gas og asteroider",
        b: "Is og isbelagte småsten",
       
      },
      correctAnswer: "b"
    }, 
	   {
      question: "Er det sandt at Uranus var den første planet, der blev opdaget?",
      answers: {
        a: "Ja",
        b: "Nej",
       
      },
      correctAnswer: "a"
    },
	   {
      question: "Hvilken romersk gud er Neptun opkaldt efter?",
      answers: {
        a: "Krigens gud",
        b: "Havets gud",
       
      },
      correctAnswer: "b"
    },
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "#05AC2A";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} ud af ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();