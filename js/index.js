// Iteration 1: Names and Input
const hacker1 = "Hacker1";
const hacker2 = "Hacker2"
console.log(`The driver's name is ${hacker1}`)
console.log(`The driver's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let capitalizeName = "";
for (let i = 0; i < hacker1.length; i++) {
    if (i < hacker1.length - 1) {
        capitalizeName += `${hacker1[i].toUpperCase()} `;
    } else {
        capitalizeName += `${hacker1[i].toUpperCase()}`;
    }
}

let reverseName = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    reverseName += hacker1[i]
}

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

console.log(capitalizeName)
console.log(reverseName)
console.log("I'm ready!");


// Bonus 1

const firstParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus nec risus nec placerat. Morbi orci orci, interdum eu dictum vitae, lobortis ut lectus. Vestibulum vel tempor dolor. Nullam at lobortis dolor, nec volutpat nunc. Fusce mollis odio quis mauris mattis rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac egestas magna.";
const secondParagraph = "Curabitur tempus suscipit est in fringilla. Sed ac justo a leo interdum molestie. Ut id ultricies sapien. Nunc dui massa, vulputate sed dapibus eu, consectetur in nulla. Nullam volutpat scelerisque malesuada. Proin sit amet sodales elit, non ullamcorper velit. Suspendisse gravida vestibulum viverra. Integer risus ligula, ultricies a mattis sit amet, auctor vitae erat. Aliquam erat volutpat. Nunc eu libero sit amet turpis volutpat semper semper a nibh. Phasellus vitae accumsan erat, vel sollicitudin diam. Phasellus dictum enim tellus, nec sagittis arcu accumsan nec.";
const thirdParagraph = "Donec eleifend purus vel tortor vehicula, et hendrerit ex posuere. Pellentesque pellentesque neque libero, ut sodales ligula maximus at. Integer lacinia vitae purus ac consectetur. Praesent feugiat varius iaculis. Morbi sollicitudin urna in dui ornare pulvinar. Nam consequat, augue a molestie interdum, lorem ligula vestibulum ante, vel mollis elit nisi at nisi. Nulla accumsan feugiat malesuada. Etiam nec luctus urna.";

const splitParagrpsh = firstParagraph.split(" ");
let countAllWords = 0;
let countSelectedWords = 0;

for (let i = 0; i < splitParagrpsh.length; i++) {
    countAllWords++;
    if (splitParagrpsh[i] === "et") {
        countSelectedWords++;
    }
}

console.log("countAllWords", countAllWords);
console.log("countSelectedWords", countSelectedWords);

// Bonus 2

let phraseToCheck = "juan";
let reversePhraseToCheck = "juan";

if (phraseToCheck === reversePhraseToCheck.split("").reverse().join("")) {
    console.log("It is Palindrome")
} else {
    console.log("It is not Palindrome")
}

function isPalindrome(phraseToCheck) {
    const alphaNumeric = /[^A-Za-z0–9]/g;
    const lowPhraseToCheck = phraseToCheck.toLowerCase().replace(alphaNumeric, '');
    const reversePhraseToCheck = lowPhraseToCheck.split('').reverse().join('');
    if (lowPhraseToCheck === reversePhraseToCheck) {
        console.log("It is Palindrome")
    } else {
        console.log("It is not Palindrome")
    }

}

isPalindrome("A man, a plan, a canal. Panama");
isPalindrome("Amor, Roma");
isPalindrome("race car");
isPalindrome("stack cats");
isPalindrome("step on no pets");
isPalindrome("taco cat");
isPalindrome("put it up");
isPalindrome("Was it a car or a cat I saw?" );
isPalindrome("No 'x' in Nixon");