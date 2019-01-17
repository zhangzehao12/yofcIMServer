define(function(require, exports, module) {
  var ejs = require("ejs");
  var $ = require("jquery");

  console.log($.fn);
  module.exports = {
    showCallPanle: function() {
      alert(1);
      html = ejs.render("callSelectPanel");
      // $(body).append(html);
    }
  };
});
