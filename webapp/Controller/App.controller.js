// criação do meu controller

// definir modulo de dependencias
sap.ui.define(
  [
    // array de dependencias
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel" 
  ],

  // funcao de retorno que define modulo, as dependencias costumam
  // estar como parametros nessa funcao
  function (Controller, MessageToast, JSONModel, ResourceModel) {

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

        // seta o i18n model na view
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: ""
        });
        this.getView().setModel(i18nModel, "i18n")
      },

      // funcao onShowHello
      onShowHello: function () {

        // ler mensagem do i18n model        
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        MessageToast.show(sMsg);
      },
    });
  }
);
