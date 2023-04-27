// definir modulo de dependencias
sap.ui.define(
  [
    // array de dependencias
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  // funcao de retorno que define modulo, as dependencias costumam
  // estar como parametros nessa funcao
  function (Controller, MessageToast, JSONModel) {
    // usa a versao mais recente do js
    "use strict";
    // define uma nova classe do controlador com esse nome escrito na string
    return Controller.extend("sap.ui.demo.walkthrought.App", {
      // quando o controlador é iniciado ele chama essa funcao
      onInit: function () {
        // objeto dados
        var oData = {
          recipient: {
            name: "UI5",
          },
        };
        // criando dados JSONModel com o objeto criado acima
        var oModel = new JSONModel(oData);
        // pega a view atual e seta o modelo para o modelo criado acima
        this.getView().setModel(oModel);
      },
      // funcao onShowHello
      onShowHello: function () {
        // pega a view do controller atual
        var sRecipient = this.getView()
        // pega o modelo da view
          .getModel()
        // pega o valor da propriedade name do objeto criado anteriormente
          .getProperty("/recipient/name");
        // chama a dependencia messageToast e da um show na variavel sRecipient
        MessageToast.show(`Hello ${sRecipient} 😁😁`);
      },
    });
  }
);
