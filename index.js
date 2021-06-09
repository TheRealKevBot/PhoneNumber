//  Write a function that accepts an array of 10 integers (between 0 and 9), 
//  that returns a string of those numbers in the form of a phone number.

//  Example:
//  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//  The returned format must be correct in order to complete this challenge.
//  Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    areaCode = '(' + numbers.slice(0,3).join('') + ') '
    telephoneNumber = numbers.slice(3,6).join('') + '-' + numbers.slice(6).join('')
    return areaCode + telephoneNumber
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(createPhoneNumber([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]));
console.log(createPhoneNumber([5, 9, 7, 2, 5, 3, 5, 3, 3, 0]));
console.log(createPhoneNumber([4, 6, 7, 5, 5, 5, 0, 0, 2, 4]));
console.log(createPhoneNumber([5, 0, 0, 6, 4, 2, 1, 3, 4, 8]));