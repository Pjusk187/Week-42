/*
    Hi.
    This is a set of practice exercises.
    The purpose is to focus on a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change any code that is provided unless the task specifically says so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"];

for (let index = 0; index < people.length; index++) {
  let person = people[index];
  console.log(person);
}

console.log("Task: A");

function array_of_length(n, m) {
  const arr = [];
  for (let index = n; index < m; index++) {
    arr.push(index);
  }
  return arr;
}

console.log(array_of_length(5, 10));

console.log("Task: B");

function combine_arrays(a, b) {
  const arr = [];
  for (const element of a) {
    if (arr.includes(element)) {
      continue;
    }
    arr.push(element);
  }
  for (const element of b) {
    if (arr.includes(element)) {
      continue;
    }
    arr.push(element);
  }
  return arr;
}
console.log(combine_arrays(array_of_length(5, 11), array_of_length(8, 23)));

console.log("Task: C");
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const message = "ckrr jutk";
let shift = 6;

function decrypt(message, alphabet, shift) {
  const split_alphabet = alphabet.split("");
  const split_message = message.split("");

  const ret_msg = [];

  for (const element of split_message) {
    if (split_alphabet.includes(element)) {
      let currentIndex = split_alphabet.indexOf(element);
      let newIndex =
        (currentIndex - shift + split_alphabet.length) % split_alphabet.length;
      ret_msg.push(split_alphabet[newIndex]);
    } else {
      ret_msg.push(element);
    }
  }

  return ret_msg.join("");
}

console.log(decrypt(message, ALPHABET, shift));

console.log("Task: D");

const numbers = [1, 23, 14, 56, 42, 33, 0, 3];
const target = 36;

function two_sum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] + array[i] == target) {
        return [array[j], array[i]];
      }
    }
  }
}

console.log(two_sum(numbers, target));

console.log("Task: E");

function find_digit_number(number) {
  return number.toString().split("").length;
}

console.log(find_digit_number(42693));
