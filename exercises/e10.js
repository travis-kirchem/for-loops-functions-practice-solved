// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
    let withLetter = [];
  for (let user of array) {
    for (let char of user.name) {
      if (char.toLowerCase() === letter.toLowerCase()) {
        withLetter.push(user.name);
      }
    }
  }
  return withLetter;
}
  
  
  
//   let arr = [];
//   let arr1 = [];
//   for (const key in array) {
//     arr1 = array[key].name;
//     arr1 = arr1.toLowerCase();
//     arr1 = arr1.split("");
//    if (arr1.includes(letter)) {
//     arr.push(array[key].name);
//    }
//   }
// return arr;
//}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
