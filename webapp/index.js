// crição da minha view

sap.ui.define([
  "sap/ui/core/mvc/XMLView"

], function (XMLView) {
  "use strict";

  XMLView.create({
    viewName: "sap.ui.demo.walkthrough.view.App"
  }).then(function (oView) {
    oView.placeAt("content"); // depois de criada, bota essa view no meu content
  });
});
