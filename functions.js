const { names, numbers } = require("./data")


function firstElement(array) {
    console.log(array[0])
    // console.log(array.shift());
}
function allElementsExceptTheLastOne(array) {
    console.log(array.slice(0, (array.length - 1)));
}
function lastElement(array) {
    console.log(array.pop());
}
function allElementsExceptTheFirstOne(array) {
    console.log(array.slice(1, array.length));
}
function position(array, n) {
    if (n < 0 || n > array.length) {
        return console.log(array.pop());
    }
}
function remove(array, word) {
    return array = array.filter(e => e !== word)
}
function removeDuplicates(array) {
    return array = array.filter((item, index) => array.indexOf(item) === index)
}
// +++++++++++++++++++ 
function randomNumber(x, y) {
    return (Math.floor(Math.random() * (y - x) + x));
}
function capitalLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function capital(str) {
    return str.toUpperCase()
}
function lastLetterCheck(str, char) {
    let lastLetter = str.slice(-1)
    if (lastLetter == char) {
        return true
    }
    else {
        return false
    }

    // return str.includes(char)
    // str.slice(-1);
}
module.exports = {
    firstElement,
    allElementsExceptTheLastOne,
    lastElement,
    allElementsExceptTheFirstOne,
    position,
    remove,
    removeDuplicates,
    randomNumber,
    capitalLetter,
    capital,
    lastLetterCheck
}