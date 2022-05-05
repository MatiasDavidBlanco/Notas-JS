// función que comprueba palíndromos

function palindrome(str) {
    let strReves="";
    let result = str.replace(/[^0-9a-z]/gi, '').toUpperCase();
    
    
    for (let i=result.length-1; i>=0; i--){
      strReves= strReves + result[i];
    }
    if (result===strReves){
       return true;
    }
  
     return false;
   
    
  }
   
  
  console.log(palindrome("race car"));
  
  
  