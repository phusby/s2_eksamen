new Vue({
    el: '#app',
    data: function(){
        return {
            questions: [
                {
                    question: "Bor du på jorden?",
                    answers: [
                        { answer: "Ja, det gør jeg.", id: '1', picked: 0, correct: true },
                        { answer: "Nej, det gør jeg ikke.", id: '1', picked: 0, correct: false },
                    ]
                },{
                    question: "Er der to onsdage på en uge?",
                    answers: [
                        { answer: "Ja, det er der!", id: '1', picked: 0, correct: false },
                        { answer: "Nej, det er der ikke!", id: '2', picked: 0, correct: true },
                    ]
                },
				{
                    question: "Er der to tirsdage på en uge?",
                    answers: [
                        { answer: "Ja, det er der!", id: '1', picked: 0, correct: false },
                        { answer: "Nej, det er der ikke!", id: '2', picked: 0, correct: true },
                    ]
                },
				{
                    question: "Er der to torsdage på en uge?",
                    answers: [
                        { answer: "Ja, det er der!", id: '1', picked: 0, correct: false },
                        { answer: "Nej, det er der ikke!", id: '2', picked: 0, correct: true },
                    ]
                },
				{
                    question: "Er der to fredage på en uge?",
                    answers: [
                        { answer: "Ja, det er der!", id: '1', picked: 0, correct: false },
                        { answer: "Nej, det er der ikke!", id: '2', picked: 0, correct: true },
                    ]
                },
				{
                    question: "Er der to dage på en uge?",
                    answers: [
                        { answer: "Ja, det er der!", id: '1', picked: 0, correct: false },
                        { answer: "Nej, det er der ikke!", id: '2', picked: 0, correct: true },
                    ]
                },
				{
                    question: "Er der to lørdage på en uge?",
                    answers: [
                        { answer: "Ja, det er der!", id: '1', picked: 0, correct: false },
                        { answer: "Nej, det er der ikke!", id: '2', picked: 0, correct: true },
                    ]
                },
                {
                    question: "Er der to gengkfm på en uge?",
                    answers: [
                        { answer: "Ja, det er der!", id: '1', picked: 0, correct: false },
                        { answer: "Nej, det er der ikke!", id: '2', picked: 0, correct: true },
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