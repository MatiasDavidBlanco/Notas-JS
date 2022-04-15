//JavaScript objects are containers for named values, called properties and methods.

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

  // SUPERTYPE principio DRY 

    function Animal() { };

    Animal.prototype = {
      constructor: Animal, 
      describe: function() {
        console.log("My name is " + this.name);
      }
    };  

    Bird.prototype = {
      constructor: Bird
    };
    
    Dog.prototype = {
      constructor: Dog
    };

    // Heredar comportamientos de un SUPERTYPE

    let animal = Object.create(Animal.prototype);

    //Un Objeto puede heredar su comportamiento (métodos) de otro objeto al referenciar su prototype (METODOS HEREDADOS)

    ChildObject.prototype = Object.create(ParentObject.prototype);

    // El ChildObject recibió sus propios métodos al encadenarlos a su prototype (METODOS PROPIOS)

    ChildObject.prototype.methodName = function() {...};


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

    //En lugar de HERENCIA, para objetos "no relacionados" es mejor utilizar "mixins". Un "mixin" permite a otros objetos utilizar una colección de funciones.
    //El flyMixin toma a cualquier objeto y le da el método fly.

    let flyMixin = function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      }
    };

    let bird = {
      name: "Donald",
      numLegs: 2
    };
    
    let plane = {
      model: "777",
      numPassengers: 524
    };
    
    flyMixin(bird);
    flyMixin(plane);

    //Propiedades PÚBLICAS son aquellas que se pueden acceder y modificar por fuera de la definición del objeto 
    bird.name = "Duffy";

    //La forma más sencilla de hacer PRIVADA esta propiedad pública es creando una variable dentro de la función constructora. Esto cambia el alcance de esa variable para que esté dentro de la función constructora versus disponible globalmente. De este modo, la variable solo puede ser accesible y cambiable por métodos que también estén dentro de la función constructora.

    // Aquí getHatchedEggCount es un método privilegiado, porque tiene acceso a la variable privada hatchedEgg. Esto es posible porque hatchedEgg está declarada en el mismo contexto que getHatchedEggCount. En JavaScript, una función siempre tiene acceso al contexto en el que se creó. A esto se le llama CLOUSURE.

   function Bird() {
      let weight = 15;
      this.getWeight= function(){
        return weight;
      };
    }

    let ducky = new Bird();
    ducky.getWeight();

    //funciones que son invocadas inmediatamente (IIFE) Immediately invoked function expression (Se invocan "()" mientras se estan declarando)
    (function () {
      console.log("Chirp, chirp!");
    })();
