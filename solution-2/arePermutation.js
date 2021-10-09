//TASK TWO SOLUTION:


    let arePermutation = (s1, s2) => {
      
        let hash = {};
      
        if (s1.length !== s2.length) {
          return false;
        }
      
        for (let i = 0; i < s1.length; i++) {
          let c = s1[i];
          if (hash[c]) {
            hash[c]++;
          } else {
            hash[c] = 1;
          }
        }
      
        for (let i = 0; i < s2.length; i++) {
          let c = s2[i];
          if (hash[c] && hash[c] !== 0) {
            hash[c]--;
          } else {
            return false;
          }
        }
      
        return true;
      };
      
      console.log(
        arePermutation('', ''),
        arePermutation('do', 'od'),
        arePermutation('sos', 'os'),
        arePermutation('abc', 'abz'),
        arePermutation('restful', 'fluster')
      );

      
//OUTPUT: true
        //true 
        //false 
        //false 
        //true
      