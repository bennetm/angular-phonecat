System.register(["./list_layout.controller"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var list_layout_controller_1;
    return {
        setters:[
            function (list_layout_controller_1_1) {
                list_layout_controller_1 = list_layout_controller_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('phonecat.layout.list', ['ngAnimate'])
                .controller('ListLayoutController', list_layout_controller_1.default));
        }
    }
});
//# sourceMappingURL=list_layout.module.js.map