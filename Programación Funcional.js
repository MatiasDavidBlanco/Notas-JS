// La programación funcional es un estilo de programación donde las soluciones son simples, funciones aisladas, sin ningún efecto secundario fuera del ámbito de la función: INPUT -> PROCESS -> OUTPUT

// La programación funcional se refiere a:

// Funciones aisladas: sin dependencia alguna del estado del programa, el cual incluye variables globales sujetas a cambios

// Funciones puras: una misma entrada siempre da la misma salida

// Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función son cuidadosamente controlados

// PARADIGMA DE PF https://www.youtube.com/watch?v=Ga3XXNAIPt0

// TERMINOLOGIA de la programación funcional:

// Callbacks son las funciones que se deslizan o pasan a otra función para decidir la invocación de esa función. Es posible que las hayas visto pasar a otros métodos, por ejemplo en filter, la función callback le dice a JavaScript los criterios para filtrar un arreglo.

// Las funciones que pueden ser asignadas a una variable, pasadas a otra función o devueltas desde otra función como cualquier otro valor normal, se llaman funciones de primera clase. En JavaScript, todas las funciones son funciones de primera clase.

// Las funciones que toman una función como argumento o devuelven una función como valor de retorno se llaman funciones de orden superior.

// Cuando las funciones se pasan o se devuelven desde otra función, las funciones que se pasaron o devolvieron se pueden llamar lambda.