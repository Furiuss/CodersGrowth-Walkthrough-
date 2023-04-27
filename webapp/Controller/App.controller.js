sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrought.App", {
      onInit: function () {
        // set the data model on the view
        var oData = {
          recipient: {
            name: "UI5",
          },
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },
      onShowHello: function () {
        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
        MessageToast.show(`Hello ${sRecipient} 😁😁`);
      },
    });
  }
);
