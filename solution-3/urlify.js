//TASK THREE SOLUTION:


let URLify = (s, n = s.length) => {
  
    let out = '';
    let chars = 0;
  
    for (let i = 0; i < s.length; i++) {
      let c = s[i];
      if (c !== ' ') {
        chars++;
      }
    }
  
    let spaces = n - chars;
  
    for (let i = 0; i < s.length; i++) {
      let c = s[i];
      if (c === ' ' && spaces > 0) {
        out += '%20';
        spaces--;
      } else if (c !== ' ') {
        out += c;
      }
    }
  
    return out;
  };

  
  console.log(
    URLify('Mr John Smith ', 13)
  );
  

  //OUTPUT:  Mr%20John%20Smith