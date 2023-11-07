// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

const Kalvian1 = "XXXX";
console.log(`The driver's name is ${Kalvian1}`)

const kalvian2 = "YYYY"
console.log(`The navigator's name is ${kalvian2}`)

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
const length1 = Kalvian1.length;
const length2 = kalvian2.length;

function checkLongestLength(){
  if(length1>length2){
    console.log(`The driver has the longest name, it has ${length1} characters.`);
  }
  else if(length2>length1){
    console.log(`It seems that the navigator has the longest name, it has ${length2} characters.`);
  }
  else{
    console.log(`Wow, you both have equally long names, X${length1} characters!.`);
  }
  
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 
function checkForVowels(givenString) {
  const vowels = ["a", "e", "i", "o", "u"];
  let indexArray = [];
  let vowelsArray = [];

  for (let index = 0; index < givenString.length; index++) {
    let isVowel = false;
    for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
      if (vowels[vowelIndex] === givenString[index]) {
        isVowel = true;
        break;
      }
    }

    if (isVowel) {
      vowelsArray.push(givenString[index]);
      indexArray.push(index);
    }
  }

  if (vowelsArray.length > 0) {
    console.log(`${givenString} ${[...vowelsArray]} ${[...indexArray]}`);
  } else {
    console.log("no vowels");
  }
}
checkForVowels("Kalvian");

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
// function checkForUpperCase(givenString){
//    let UPPERCASE = 0 ;
//    let lowercase = 0 ;
   
//    for(let index=0; index<givenString.length;index++){
//      if(givenString[index]==givenString[index].toUpperCase()){
//        UPPERCASE++;
//      }
//      else{
//        lowercase++;
//      }
//    }
//    console.log(`Uppercase:${UPPERCASE},Lowercase: ${lowercase}`)

// }
// checkForUpperCase("Kalvian");
function checkForUpperCase(givenString) {
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = 0;
  let lowercase = 0;

  for (let index = 0; index < givenString.length; index++) {
    const currentChar = givenString[index];
    if (lowercaseLetters.includes(currentChar)) {
      lowercase++;
    } else if (currentChar === currentChar.toUpperCase()) {
      uppercase++;
    }
  }

  console.log(`Uppercase: ${uppercase}, Lowercase: ${lowercase}`);
}
 checkForUpperCase("Kalvian");

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
function playWithChar(driver, navigator){
  let ans = "";
  for(let index=0; index<driver.length; index++){
    ans+= driver[index].toUpperCase()+ " "
  }
  console.log(ans)

  // 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
  let reverseNavgitor = "";
  for(let index=(navigator.length)-1; index>=0; index--){
    reverseNavgitor+= navigator[index]
  }
  console.log(reverseNavgitor);



  // 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
  // - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
  let mergename = driver+" "+navigator;
  let mergereverse = navigator+" "+driver;

  console.log(mergename,mergereverse);
 

  // 3.3 Depending on the lexicographic order of the strings, print:
  // - The driver's name goes first.
  // - Yo, the navigator goes first definitely.
  // - What?! You both have the same name?
  let lexicographicOrderList = [driver,navigator];
  lexicographicOrderList.sort();
  if(lexicographicOrderList[0]=="Driver"){
    console.log(`The driver's name goes first.`);
  }
  else if(lexicographicOrderList[0]=="Navigator"){
    console.log(`Yo, the navigator goes first definitely.`);
  }
  else{
    console.log(`What?! You both have the same name?`);
  }
}

playWithChar("Kalvian", "Navigator");
playWithChar("Driver","Navigator");
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
function loremGenerator(){
  let textCounter = 0 ;

  let text = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? interdum et nibh.
  Phasellus vehicula purus libero, id dictum quam iaculis vitae. Maecenas quis metus bibendum, 
  commodo tortor eget, placerat urna. Sed facilisis tincidunt diam ac mollis. Donec suscipit 
  malesuada massa sit amet blandit. Phasellus in consequat nibh. Vivamus vestibulum dolor metus, 
  id molestie odio porttitor quis. Mauris tempus tempus gravida. Aenean consequat blandit odio, eu 
  eleifend dolor hendrerit nec. Aliquam volutpat tortor in eros porta, consequat facilisis ipsum 
  lacinia. Vestibulum facilisis tempus ligula id sodales. Donec at libero magna. Donec egestas lacus 
  tellus, vitae suscipit felis tristique eget. Praesent ex erat, imperdiet a molestie facilisis, 
  laoreet a ipsum. Vestibulum et metus a turpis fringilla egestas quis vitae leo. Maecenas tempus 
  eu nunc sed pellentesque. Suspendisse ultricies metus eget porta pharetra.`

  console.log(text.split(' ').filter(function(n) { return n != '' }).length);
  console.log(text.split(' ').filter(function(n) { return n != '' }).filter(function(m) { return m == 'et' })
  .length);

}
loremGenerator()

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

function palindromeCheck(givenString) {
  // Remove spaces and commas from the input string and convert it to lowercase
  const mainString = givenString.replace(/[\s,]/g, '').toLowerCase();

  const len = mainString.length;

  for (let i = 0; i < len / 2; i++) {
    if (mainString[i] !== mainString[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }
  
  return 'It is a palindrome';
}
console.log(palindromeCheck("A man, a plan, a canal, Panama"))

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
