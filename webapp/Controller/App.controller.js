// criação do meu controller

// definir modulo de dependencias
sap.ui.define(
  [
    // array de dependencias
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
  ],

  // funcao de retorno que define modulo, as dependencias costumam
  // estar como parametros nessa funcao
  function (Controller, MessageToast) {
    "use strict";

    // define uma nova classe do controlador com esse nome escrito na string
    return Controller.extend("sap.ui.demo.walkthrought.App", {
      // funcao onShowHello
      onShowHello: function () {
        // ler mensagem do i18n model    
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView().getModel().getProperty("/recipient/lastName");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        MessageToast.show(sMsg);
      },
    });
  }
);
