// JavaScript Document

	var score = 0;
	// "2 dimensional" array
	var questions = [							 
		['How many moons does Earth have?', 1],					 
		['How many moons does Saturn have?', 31],
		['How many moons does Venus have?', 0],	
		['hvor mange gange er jorden større end mars?', 6]
	];
	
	console.log(questions);
	console.log('First question: ' + questions[0][0]);
	console.log('First answer: ' + questions[0][1]);
	
	////////////////////////////////////////////////////////////////////////////
	// Task: Use a for loop to run the whole quiz witj ALL questions         //
	// Give the user feedback on how many questions were correctly answered! //
	//////////////////////////////////////////////////////////////////////////
	
	
	for(var i = 0; i < questions.length; i++){
		
		askQuestion(i);
		
	}
	
	
	function askQuestion(q){
		var answer = prompt(questions[q][0], '');
		
		if (answer == questions[q][1]){
			alert('Correct!');
			score++; //imcrementer score by 1
			console.log(score);
		} else {
			alert('Not Correct! The correct answer was ' + questions[q][1]);
		}
	}
	alert('Du har svaret rigtigt på ' + score + ' spørgsmål ud af ' + questions.length);
