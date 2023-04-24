// objective: extract numbers from all 3 arrays below into new single array called result

// STEP 1: 
const data = { // object: data
	lists: [ // ..containing property: lists - which is an array containing 3 arrays of 2 elements each (one is a string, and the other are an array of numbers)
		['first', [15, 11, 13, 7, 5]], 
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
// STEP 2: 
// accessing each of the number lists       
const first = data.lists[0][1] // created variable named 'first', 'second' and 'third' & assigned the values of the numbers element of each of the 3 arrays
const second = data.lists[1][1]
const third = data.lists[2][1]

// STEP 3:
// new array called result 
const result = []

// STEP 4:
// NB read: arrow function called extraBiggest. This function checks which of the 3 arrays has the largest number at the end of the array, removes (pops) it, and then moves it to the 'results'. This process is repeated 15 times.
const extractBiggest = () => {  
    // if the first's last number is bigger than the second's last number then remove the first number
	if (first[first.length - 1] > second[second.length - 1]) { 
		return first.pop(); // .pop removes the last element in an array
	}
    // if the seconds last number is bigger than the thirds last number then remove the seconds number
    if (second[second.length - 1] > third[third.length -1]) {
		return second.pop();
	}
	
    // (this is like otherwise) says if neither of the above if statements are true, then the third array has the largest number at the end of the array and must be popped
	return third.pop();
}

// Only edit above

// STEP 5: the extractBiggest function is called 15 times using "push" to add the returned number to the result array
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

// Step 6: The results array is logged to the console
console.log(result)