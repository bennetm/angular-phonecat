System.register(['./phone_list_component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var phone_list_component_1;
    return {
        setters:[
            function (phone_list_component_1_1) {
                phone_list_component_1 = phone_list_component_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('phonecat.components.phoneList', [])
                .component('phoneList', new phone_list_component_1.default()));
        }
    }
});
//# sourceMappingURL=phone_list.module.js.map