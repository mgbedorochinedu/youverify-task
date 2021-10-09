//TASK ONE SOLUTION:
  
//IsUnique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?


    function uniqueCharacter(str)
    {
        let hash = {};

        for (let i = 0; i < str.length; i++) {
          let c = str[i];
          if (hash[c]) {
            return false;
          } else {
            hash[c] = true;
          }
        }
      
        return true;
    }


    console.log(uniqueCharacter('verify'));
    console.log(uniqueCharacter('youverify'));
    console.log(uniqueCharacter('s'));
    console.log(uniqueCharacter('ss'));
    

    //OUTPUT: true
            //false
            //true
            //false


