System.register(['./phone_detail_component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var phone_detail_component_1;
    return {
        setters:[
            function (phone_detail_component_1_1) {
                phone_detail_component_1 = phone_detail_component_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('phonecat.components.phoneDetail', ['ngAnimate'])
                .component('phoneDetails', new phone_detail_component_1.default()));
        }
    }
});
//# sourceMappingURL=phone_detail.module.js.map