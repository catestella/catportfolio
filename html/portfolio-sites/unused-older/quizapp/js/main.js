var questions = [ 
	{
		question: "Faster than the speed of light!",
		answer: "flash"
	},
	{
		question: "The Joker's Worst Nightmare!",
		answer: "batman"
	},
	{
		question: "Not Your Average Woman!",
		answer: "wonder woman"
	},
	{
		question: "Not of this World!",
		answer: "thor"
	},
	{
		question: "Don't make him angry!",
		answer: "hulk"
	},
	{
		question: "Robert Downey Jr.",
		answer: "iron man"
	}
	// {
	// 	question: "How many dragons does Daenerys Targaryen have?",
	// 	answer: 3
	// },
	// {
	// 	question: "How many hands does Jaime Lannister have after book 3?",
	// 	answer: 1
	// },
	// {
	// 	question: "Did Tyrion commit regicide or patricide?",
	// 	answer: "both"
	// },
	// {
	// 	question: "How many Direwolves do the starks find?",
	// 	answer: 6
	// }
]

// function input() {
// 	var answer = document.getElementById("answer").value.toLowerCase()

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}












