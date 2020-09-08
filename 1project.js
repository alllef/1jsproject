

function hasRemainder(number, firstDivider, secondDivider) {
    return number % firstDivider === 0 && number % secondDivider === 0;
}

console.log(hasRemainder(10, 5, 2));
console.log(hasRemainder(43,26,17));

function arr(number) {
    let array = [];
    for (let i = 0; i < number; i++) array.push(i);
    //for (let i = 0; i < array.length; i++) console.log(array[i] + " ");
    return array;
}

console.log(arr(56));

function capitalize(word) {
    if(word.length<1 ||word.length>10) return false;
    word = word[0].toUpperCase() + word.slice(1, word.length);
    return word;
}
console.log(capitalize("h"));
console.log(capitalize("hello"));
console.log(capitalize("string longer than 10"));