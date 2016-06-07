System.register(['./phone.factory'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var phone_factory_1;
    return {
        setters:[
            function (phone_factory_1_1) {
                phone_factory_1 = phone_factory_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('phonecat.services', ['ngResource'])
                .factory('PhoneSvc', phone_factory_1.default));
        }
    }
});
//# sourceMappingURL=phone.module.js.map