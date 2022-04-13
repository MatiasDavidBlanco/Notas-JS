// creación de objetos con propiedades directas

let duck = {
    name: "Aflac",
    numLegs: 2
  };

  // acceso a propiedades de un objeto

  console.log(duck.name);

  
  // creación de un método de un objeto
  
  let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}
  };
  duck.sayName();