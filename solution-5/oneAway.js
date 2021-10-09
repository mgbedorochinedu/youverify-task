//TASK FIVE SOLUTION:

let oneAway = (str1, str2) => {
    let edits = 1;
    let maxLength = Math.max(str1.length, str2.length);
    let diff = Math.abs(str1.length - str2.length);
  
    if (diff > edits) {
      return false;
    }
    for (let i = 0, y = 0; i < maxLength || y < maxLength; i++, y++) {
      let char1 = str1[i];
      let char2 = str2[y];
      if (char1 !== char2) {
        edits--;
        if (edits < 0) {
          return false;
        }
        //inserted
        if (str1[i] === str2[y + 1]) { 
          y++;
        }
        //removed
         else if (str1[i + 1] === str2[y]) { 
          i++;
        }
      } 
    }
    return true;
  };

  console.log(
    //removed
    oneAway('pale', 'ple'), 

    //inserted
    oneAway('pales', 'pale'),

    //replaced 
    oneAway('pale', 'bale'), 
 
    oneAway('pale', 'bake') 
  );

  //OUTPUT: true 
          //true
          //true 
          //false