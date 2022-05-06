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


  // FUNCIÓN QUE TRANSFORMA NUMEROS DECIMALES A NUMEROS ROMANOS 

  function convertToRoman(num) {
   // UNIDADES
   let _1= "I";
   let _2= "II";
   let _3= "III";
   let _4= "IV";
   let _5= "V";
   let _6= "VI";
   let _7= "VII";
   let _8= "VIII";
   let _9= "IX";
   // DECENAS
   let _10= "X";
   let _20= "XX";
   let _30= "XXX";
   let _40= "XL";
   let _50= "L";
   let _60= "LX";
   let _70= "LXX";
   let _80= "LXXX";
   let _90= "XC";
   // CENTENAS
   let _100= "C";
   let _200= "CC";
   let _300= "CCC";
   let _400= "CD";
   let _500= "D";
   let _600= "DC";
   let _700= "DCC";
   let _800= "DCCC";
   let _900= "CM";
   // MILES
   let _1000= "M";
  
   // CONVERSIÓN DE NUM A STRING
   let number= num.toString();
   let cifras= number.length;
 
   // función que transforma unidades
 
   function unidades(number){
     switch(number){
         case number="0":
           return "";
         case number="1":
           return _1;
         case number="2":
           return _2;
         case number="3":
           return _3;
         case number="4":
           return _4;
         case number="4":
           return _4;
         case number="5":
           return _5;
         case number="6":
           return _6;
         case number="7":
           return _7;
         case number="8":
           return _8;
         case number="9":
           return _9;
       }
   }
 
   // función que transforma decenas
 
   function decenas(number){
     switch(number){
         case number="0":
             return "";
         case number="1":
           return _10;
         case number="2":
           return _20;
         case number="3":
           return _30;
         case number="4":
           return _40;
         case number="4":
           return _40;
         case number="5":
           return _50;
         case number="6":
           return _60;
         case number="7":
           return _70;
         case number="8":
           return _80;
         case number="9":
           return _90;
       }
   }
 
   // función que transforma centenas
 
   function centenas(number){
     switch(number){
         case number="0":
             return "";
         case number="1":
           return _100;
         case number="2":
           return _200;
         case number="3":
           return _300;
         case number="4":
           return _400;
         case number="5":
           return _500;
         case number="6":
           return _600;
         case number="7":
           return _700;
         case number="8":
           return _800;
         case number="9":
           return _900;
       }
   }
 
   // función que transforma miles
 
   function miles(number){
     if (number=="0"){
       return "";
     }else{
       return _1000.repeat(number);
     }  
   }
 
   // DIFERENTES BLOQUES DE CODIGOS EN BASE A LA CIFRA DEL NÚMERO
 
   switch (cifras) {
     case cifras=1:
       return unidades(number);
       break;
     case cifras=2:
       return decenas(number[0])+ unidades(number[1]);
       break;
     case cifras=3:
       return centenas(number[0])+ decenas(number[1])+ unidades(number[2]);
       break;
     case cifras=4:
       return miles(number[0])+centenas(number[1])+ decenas(number[2])+ unidades(number[3]);
       break;
     default:
       console.log("Sólo convierto numeros de hasta 4 cifras");
       break;
   }
 return "";
 }
 
 console.log(convertToRoman(4000));
 
 
 
 
  
  
  