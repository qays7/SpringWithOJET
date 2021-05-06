/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./ojet-springboot-container-view.html', './ojet-springboot-container-viewModel', 'text!./component.json', 'css!./ojet-springboot-container-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('ojet-springboot-container', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);