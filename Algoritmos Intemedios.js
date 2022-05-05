// función que toma codigo binario y lo traduce a texto.

function binaryAgent(str) {

    let newStr= str.split(" ");
    let resultado=[];
  
    for (let i = 0; i < newStr.length; i++) {
          resultado.push(String.fromCharCode(parseInt(newStr[i], 2)));
      }
      
    return resultado.join("");
}
  
  console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
  
// función que interactúa con el objeto persona. 

const Person = function(firstAndLast) {

  let nuevo=firstAndLast.split(" ")
  let first= nuevo[0];
  let last= nuevo[1];

  this.getFullName = function() {
    return first+" "+last;
  };
  this.getFirstName = function() {
    return first ;
  };
  this.getLastName = function() {
    return last;
  };
  this.setFirstName = function(fname) {
    first= fname;
    return fname;
  };
  this.setLastName = function(lname) {
    last= lname;
    return lname;
  };
  this.setFullName = function(completo) {
    let a= completo.split(" ");
    first= a[0];
    last= a[1];
    return first +" "+ last;
  };

  return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.setFirstName("Matias"));
console.log(bob.getFirstName());
console.log(bob.setLastName("Blanco"));
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.setFullName("Paula Cuadra"));
console.log(bob.getFullName());
console.log(bob.firstName);
console.log(bob.setFullName("Bob Ross"));
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFullName());
console.log(bob.setFullName("Haskell Curry"));
console.log(bob.getFullName());

  
// función que calcula el periodo orbital de un objeto alrededor de la tierra. 

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = [];

  //Looping through each key in arr object
  for (let elem in arr) {
    //Rounding off the orbital period value
    const orbitalPer = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
    );
    //Adding new object with orbitalPeriod property
    newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
  }

  return newArr;
}


orbitalPeriod([{ name: "sputnik", avgAlt: 35873}]);