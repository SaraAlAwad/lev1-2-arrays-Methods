const { names, numbers } = require("./data");
const { firstElement, allElementsExceptTheLastOne, lastElement, allElementsExceptTheFirstOne, position, remove, removeDuplicates, randomNumber, capitalLetter, capital, lastLetterCheck } = require("./functions");

// firstElement(names)
// allElementsExceptTheLastOne(names)
// lastElement(names)
// allElementsExceptTheFirstOne(names)
// position(numbers, -3)
let arr = remove(["remove", "stay", "stay5", 22, true, "remove"], "remove")
console.log(arr);
console.log(removeDuplicates([1, 6, 9, 2, 1, 6, 7, 10]))

// functions without arrays
console.log(randomNumber(10, 5));
console.log(capitalLetter("sara"));
console.log(capital('sara'));

console.log(lastLetterCheck('test', 's'));
console.log(lastLetterCheck('test', 'q'));
console.log(lastLetterCheck('test', 't'));
console.log(lastLetterCheck('hi', 'i'));
