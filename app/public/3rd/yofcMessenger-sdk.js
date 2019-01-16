(function (window, undefined) {
    var yofcMessenger = {};
    if (window.yofcMessenger) {
        return;
    }

    function loadScript(url, cb) {
        var script = document.createElement('script');
        script.async = true,
            script.src = url;

        var entry = document.getElementsByTagName('script')[0];
        entry.parentNode.insertBefore(script, entry);

        script.onload = script.onreadystatechange = function () {
            var rdyState = script.readyState;

            if (!rdyState || /complete|loaded/.test(script.readyState)) {
                cb();
                script.onload = null;
                script.onreadystatechange = null;
            }
        }
    }

    yofcMessenger.init = function (cb) {
        loadScript('http://localhost:7001/public/3rd/seajs/2.2.3/sea.js', function () {
            //配置seajs
            seajs.config({
                alias: {
                    "nimWebNetCall": "sdk/NIM_Web_Netcall_Module_v5.6.0",
                    "nimWebSDK": "sdk/NIM_Web_SDK_Module_v5.6.0",
                    "speedContactFn": "ui-components/speedContactPlane",
                    //这里用的jquery同发布者环境用的jquery是独立的，比如发布者环境的window.jquery的版本是3.3.1,而这里是2.2.4
                    "jquery": "sdk/jquery_v2.2.4_Module",
                    //模板引擎
                    "ejs": "sdk/ejs_v2.5.8_Module"
                },
                // Sea.js 的基础路径
                base: 'http://localhost:7001/public/3rd/',
            });

            seajs.use(['nimWebNetCall', 'nimWebSDK', 'speedContactFn'], function (nimWebNetCall, nimWebSDK, speedContactFn) {
                if (cb && typeof cb === 'function') {
                    cb();
                }

                speedContactFn.initPlane();
                console.log(nimWebNetCall);
                console.log(nimWebSDK);
            });
        });
    }

    window.yofcMessenger = yofcMessenger;
})(this);