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
 
 // Función que decodifica lenguaje ROT13 (Cifrado César)

 function rot13(str) {
   let result="";
   let temporal= str.split(" ")

   function decodificar(x){
     let a= x.charCodeAt();
     let b= a-13;
     if (b<65){
       b= b+26;
     }
     return String.fromCharCode(b);
   }
 
   for (let i=0; i<temporal.length; i++){
      if(i>0){
         result= result +" ";
       }
     for (let j=0; j<temporal[i].length;j++){
 
       if(temporal[i][j].search(/\W/)!=-1){
          result= result + temporal[i][j];
       }else{
         result= result + decodificar(temporal[i][j]);
       }
     }
   }
  return result;
 }
 
 console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

// funcion que valida un número telefónico
// Formatos válidos
//555-555-5555
//(555)555-5555
//(555) 555-5555
//555 555 5555
//5555555555
//1 555 555 5555

 function telephoneCheck(str) {
 
    let regExp= /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    return regExp.test(str);
  
  }
  
  console.log(telephoneCheck("-1 (757) 622-7382"));

// Función caja registradora

  const currencyUnit = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {

  let changeSum = cash * 100 - price * 100;
  let changeSumCheck = changeSum;
  let change = [];
  let status = '';

  let cidSum = 0;
  let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();

  filteredCid.forEach(elem => {
    let curr = elem[0];
    let currSum = elem[1] * 100;
    cidSum += currSum;
    let amount = 0;
    while (changeSum >= currencyUnit[curr] && currSum > 0) {
      amount += currencyUnit[curr];
      changeSum -= currencyUnit[curr];
      currSum -= currencyUnit[curr];
    }
    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }
  });

  if (changeSum > 0) {
    status = 'INSUFFICIENT_FUNDS';
    change = [];
  } else if (changeSum == 0 && changeSumCheck == cidSum) {
    status = 'CLOSED';
    change = cid;
  } else {
    status = 'OPEN';
  }
  return { 'status': status, 'change': change };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


// sumar todo el dinero disponible CID y ponerlo en una variable
// crear una variable con el cambio que debo entregar

// POSIBILIDADES:

// 1) si el dinero disponible en caja es menor que el cambio necesario o no puedo devolver el cambio exacto devolver un objeto= {status: "INSUFFICIENT_FUNDS", change: []}

// 2) si el dinero disponible en caja es IGUAL que el cambio necesario devolver un objeto= {status: "CLOSED", change: [PONER EL CAMBIO ]}

// 3) si el dinero disponible en caja es MAYOR que el cambio necesario devolver un objeto= {status: "OPEN", change: [PONER EL CAMBIO QUE DEBO ENTREGAR]}
