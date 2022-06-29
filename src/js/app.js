function A(){
  const letters = ['co', 'dil', 'ity'];
  let combinations = [];
  let finalArray = [];

  generatingAllCombinations(combinations, letters);

  for (let string of combinations){
    let array = [];
    process(string, array);
    let joinedFinalString = array.join('');
    if(!finalArray.includes(joinedFinalString)){
      finalArray.push(joinedFinalString);
    }
  }

  // console.log(combi.join('\n'));
  console.log('All combinations without duplicates: ', finalArray);
  console.log('Longest string has', findingLongestString(finalArray), 'chars.');

  return findingLongestString(finalArray);
}

function generatingAllCombinations(combinations, letters){
  let letLen = Math.pow(2, letters.length);
  let temp = '';

  for (let i = 0; i < letLen ; i++){
    temp = '';
    for (let j=0; j<letters.length; j++) {
      if (i & Math.pow(2 ,j)){ 
        temp += letters[j];
      }
    }
    if (temp !== '') {
      combinations.push(temp);
    }
  }
  return;
}

function process(string, array){
  let chars = string.split('');
  for(let char of chars){
    if(!array.includes(char) ){
      array.push(char);
    } else {
      return;
    }
  }
  return;
}

function findingLongestString(strings){
  let length = 0;
  for(let string of strings){
    if(string.length > length){
      length = string.length;
    }
  }
  return length;
}

// A();
console.log(A());
