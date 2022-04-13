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

  // PROPIEDADES DIRECTAS = son aquellas que están definidas directamente en la instancia del objeto.

    function Dog(name) {
        this.name = name;
      }

  // PROPIEDADES PROTOTYPE = son aquellas que se comparten en todas las instancias de un constructor.

    Bird.prototype.numLegs = 2;

    Bird.prototype.eat = function() { // metodo (función dentro de un objeto)
      console.log("nom nom nom");
    }
    
    Bird.prototype.describe = function() { // metodo (función dentro de un objeto)
      console.log("My name is " + this.name);
    }

    Bird.prototype = { // forma más eficiente de agregar propiedades PROTOTYPE a un objeto
      constructor: Dog,
      numLegs: 2, 
      eat: function() {
        console.log("nom nom nom");
      },
      describe: function() {
        console.log("My name is " + this.name);
      }
    };

    function Bird(name) { // verificar de dónde viene el PROTOTYPE de un objeto
      this.name = name;
    }
    
    let duck = new Bird("Donald");

    Bird.prototype.isPrototypeOf(duck);


    


    // Iterar con un bucle for in sobre las propiedades de un objeto

    let ownProps = [];
    let prototypeProps = [];

    for (let property in duck) {
        if(duck.hasOwnProperty(property)) {
            ownProps.push(property);
        } else {
            prototypeProps.push(property);
        }
    }

    console.log(ownProps);
    console.log(prototypeProps);

  // Función que permite saber a través de la propiedad constructor que tipo de objeto es

    function joinBirdFraternity(candidate) {
      if (candidate.constructor === Bird) {
        return true;
      } else {
        return false;
      }
    }