//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

// function findWords(){
//     //Your code goes here
// }

// //Call method here with parameters
const findMatch = (str, names) => {
    let matched = false; 
    
    for (let i = 0; i < names.length; i++) {
      if (str.includes(names[i])) {
        console.log(`Matched ${names[i]}`);
        matched = true; 
      }
    }
    
    if (!matched) {
      console.log("No Matches");
    }
  };
  
  let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
  let dog_names = ["Max", "HAS", "PuRple", "dog"];
  
  findMatch(dog_string, dog_names);
  
//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(arr){
//     //code goes here
// }

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        arr[i] = "even index";
    }
}

let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
replaceEvens(arr);

console.log(arr);



// ------------Codewars Problems------1------
// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.
// https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/javascript
function countRedBeads(n) {
    if (n < 2) {
        return 0;
    }
    return (n - 1) * 2;
}

console.log(countRedBeads(1)); 
console.log(countRedBeads(3)); 
console.log(countRedBeads(5)); 






// -------------Codewars Problems------2------
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12



// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
    return num > 0 ? -num : num;
}

console.log(makeNegative(1));   
console.log(makeNegative(-5));  
console.log(makeNegative(0));   
