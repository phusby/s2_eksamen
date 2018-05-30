new Vue({
    el: '#app',
    data: function(){
        return {
            questions: [
                {
                    question: "Har merkur en måne?",
                    answers: [
                        { answer: "Ja", id: '1', picked: 0, correct: false },
                        { answer: "Nej", id: '2', picked: 0, correct: true },
                    ]
                },{
                    question: "Hvor mange dage tager det Venus at rotere om sin akse?",
                    answers: [
                        { answer: "243 døgn", id: '1', picked: 0, correct: true },
                        { answer: "365 døgn", id: '2', picked: 0, correct: false },
                    ]
                },
				{
                    question: "Hvor langt væk er jorden fra solen i gennemsnittet?",
                    answers: [
                        { answer: "150 mio. km i gennemsnit", id: '1', picked: 0, correct: true },
                        { answer: "300 mio. km i gennemsnit", id: '2', picked: 0, correct: false },
                    ]
                },
				{
                    question: "Mars’ to måner hedder Phobos og Deimos. Hvad betyder disse græske ord?",
                    answers: [
                        { answer: "Kæmper og Guder", id: '1', picked: 0, correct: false },
                        { answer: "Skræk og Rædsel", id: '2', picked: 0, correct: true },
                    ]
                },
				{
                    question: "Hvor mange jordkloder kan jupiter rumme?",
                    answers: [
                        { answer: "1300", id: '1', picked: 0, correct: true },
                        { answer: "500", id: '2', picked: 0, correct: false },
                    ]
                },
				{
                    question: "Hvad består Saturns ringe af?",
                    answers: [
                        { answer: "Gas og asteroider", id: '1', picked: 0, correct: false },
                        { answer: "Is og isbelagte småsten", id: '2', picked: 0, correct: true },
                    ]
                },
				{
                    question: "Er det sandt at Uranus var den første planet, der blev opdaget?",
                    answers: [
                        { answer: "Ja", id: '1', picked: 0, correct: true },
                        { answer: "Nej", id: '2', picked: 0, correct: false },
                    ]
                },
                {
                    question: " Hvilken romersk gud er Neptun opkaldt efter?",
                    answers: [
                        { answer: "Krigens gud", id: '1', picked: 0, correct: false },
                        { answer: "Havets gud", id: '2', picked: 0, correct: true },
                    ]
                }
            ],
        }
    },
    computed: {
        allHasBeenAnswered: function(){
            return this.answersMissing() <= 0;
        }
    },
    methods: {
        answersMissing: function(){
            let self = this;
            let answerCount = 0;
            for(let i = 0; self.questions.length; i++){
                for(let a = 0; self.questions[i].answers.length; a++){
                    if(self.questions[i].answers[a].picked == 1){
                        answerCount++;
                    }
                }
            }
             
            return self.questions.length - answerCount;
        },
        pick: function(question, answer){
            var self = this;
             
            for(var i = 0; i < self.questions.length; i++){
                if(self.questions[i].question == question){
                    for(var a = 0; a < self.questions[i].answers.length; a++){
                        if(self.questions[i].answers[a].answer === answer){
                            self.questions[i].answers[a].picked = 1;
                        } else {
                            self.questions[i].answers[a].picked = 0;
                        }
                    }
                }
            }
        },
        submitAnswers: function(){
            var self = this;
             
            var questionCount = self.questions.length;
            var answerCount = 0;
            var correctAnswers = 0;
             
            for(var i = 0; i < questionCount; i++){
                 
                for(var a = 0; a < self.questions[i].answers.length; a++){
                     
                    if(self.questions[i].answers[a].picked === 1){
                         
                        console.log(self.questions[i].answers[a]);
                         
                        answerCount++;
                         
                        if(self.questions[i].answers[a].correct === true){
                            console.log("correct");
                            correctAnswers++;
                        }                       
                         
                    }
                }               
                 
            }
 
            if(answerCount < questionCount){
                return alert("You need to answer "+(questionCount-answerCount)+" additional question"+(questionCount-answerCount === 1 ? '' : 's'));         
            }
             
            return alert("You answered correct on "+correctAnswers+"/"+questionCount+" question"+(questionCount === 1 ? '' : 's.'));
             
        },
         
    }
     
});