System.register(['./checkmark.filter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var checkmark_filter_1;
    return {
        setters:[
            function (checkmark_filter_1_1) {
                checkmark_filter_1 = checkmark_filter_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('phonecat.filters', [])
                .filter('checkmark', checkmark_filter_1.default));
        }
    }
});
//# sourceMappingURL=checkmark.module.js.map