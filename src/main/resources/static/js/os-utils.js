window.os = {
  parseQueryParams: () => {
    // Remove leading '?' from document.location.search
    var search = document.location.search
      ? document.location.search.substring(1)
      : "";
    var params = {};
    search.split("&").forEach(function (param) {
      var pair = param.split("=");
      params[pair[0]] = pair[1];
    });
    return params;
  },
  getParam: (paramName) => {
    return os.parseQueryParams()[paramName];
  },
  postMessage: function (message) {
    parent.postMessage(message,"*");
  },
};
