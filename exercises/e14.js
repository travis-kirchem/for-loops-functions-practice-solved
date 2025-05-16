
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  var arr = [];
  for (let i = 0; i < array.length; i++) {
    const deposits = array[i].deposits;
    const withdrawals = array[i].withdrawals;
    var sumDeposits = 0;
    var sumWithdrawals = 0;

    // calculate the sum of deposits
    if (Array.isArray(deposits)) {
      for (let j = 0; j < deposits.length; j++) {
        sumDeposits += deposits[j];
      } 
    }

    // calculate the sum of withdrawals
    if (Array.isArray(withdrawals)) {
      for (let k = 0; k < withdrawals.length; k++) {
        sumWithdrawals += withdrawals[k];
      } 
    }

    // compare deposits with withdrawals
    if (sumDeposits - sumWithdrawals != array[i].balance) {
        arr.push(array[i]);
    }
  }
  return arr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
