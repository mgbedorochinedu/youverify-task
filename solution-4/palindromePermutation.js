//TASK FOUR SOLUTION:

let palPerm = (str) => {
  
    let hash = {};
    let charCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char === ' ') {
        continue;
      }
      if (hash[char]) {
        delete hash[char];
      } else {
        hash[char] = true;
      }
      charCount++;
    }
    if (charCount % 2 === 0) {   
      return Object.keys(hash).length === 0;
    } 
    else {
      return Object.keys(hash).length === 1;
    }
  };
  
  
  console.log(
    palPerm('taco cat'),
    palPerm('atco cat')
  );


  //OUTPUT: true true