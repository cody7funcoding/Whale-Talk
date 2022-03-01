const input = 'Do you speak waleish?'

const vowels = ['a','e','i','o','u'];

const resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  for (let vowelsIndex = 0; vowelsIndex < vowels.length;   vowelsIndex++) { 

    if (input[inputIndex] === vowels[vowelsIndex]) {
      resultArray.push(vowels[vowelsIndex]);
      if (input[inputIndex] === 'e') {

        resultArray.push(input[inputIndex]);
       } if (vowels[vowelsIndex] === 'u') { 

          resultArray.push(vowels[vowelsIndex])
           
       }
    }
  }
}
let resultString = [];
 for (let i = 0; i < resultArray.length; i++) {
  resultString.push(resultArray[i].toUpperCase());
 }
 resultString = resultString.join('');
console.log(resultString);
