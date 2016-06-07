System.register(["./detail_layout.controller"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var detail_layout_controller_1;
    return {
        setters:[
            function (detail_layout_controller_1_1) {
                detail_layout_controller_1 = detail_layout_controller_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('phonecat.layout.detail', ['ngAnimate'])
                .controller('DetailLayoutController', detail_layout_controller_1.default));
        }
    }
});
//# sourceMappingURL=detail_layout.module.js.map