// criação do meu controller

// definir modulo de dependencias
sap.ui.define(
  [
    // array de dependencias
    "sap/ui/core/mvc/Controller"
  ],

  // funcao de retorno que define modulo, as dependencias costumam
  // estar como parametros nessa funcao
  function (Controller) {
    "use strict";

    // define uma nova classe do controlador com esse nome escrito na string
    return Controller.extend("sap.ui.demo.walkthrought.App", {      
    });
  }
);
