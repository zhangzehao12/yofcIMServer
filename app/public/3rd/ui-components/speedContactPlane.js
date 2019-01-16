define(function (require, exports, module) {
    var ejs = require('ejs');
    module.exports = {
        initPlane: function () {
            let people = ['geddy', 'neil', 'alex'],
                html = ejs.render('<%= people.join(", "); %>', { people: people });

            $(body).append(html);
        }
    }
});