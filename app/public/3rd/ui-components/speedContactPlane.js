define(function (require, exports, module) {
    var ejs = require('ejs');
    var $ = require('jquery');

    console.log($.fn);
    module.exports = {
        initPlane: function () {
            let people = ['geddy', 'neil', 'alex'],
                html = ejs.render('<%= people.join(", "); %>', { people: people });
        }
    }
});