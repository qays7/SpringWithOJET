/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
 "../components-pallet/loader"
*/
"use strict";
define([
  "knockout",
  "ojs/ojcontext",
  "jquery",
  "ojs/ojarraytreedataprovider",
  "ojs/ojresponsiveutils",
  "ojs/ojresponsiveknockoututils",
  "ojs/ojknockout",
  "ojs/ojbutton",
], function (ko, Context, jq, ArrayTreeDataProvider) {
  function ComponentModel(context) {
    var self = this;

    //At the start of your viewModel constructor
    var busyContext = Context.getContext(context.element).getBusyContext();
    var options = { description: "Web Component Startup - Waiting for data" };
    self.busyResolve = busyContext.addBusyState(options);
    self.mode = os.getParam("mode");
    self.composite = context.element;
    self.properties = context.properties;
    self.checkListType = self.properties.checkListType;
    self.busyResolve();

  }

  return ComponentModel;
});
