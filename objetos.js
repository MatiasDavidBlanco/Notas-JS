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

    // definición del constructor de un objeto (el nombre del constructor del objeto por convención va con MAYÚSCULA)

  function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
  }

  function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
    
  // Verificación del constructor de un objeto con "instanceof" ( true or false)

  let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");
  
  crow instanceof Bird;