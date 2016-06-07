System.register(['./search_sort_io_component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var search_sort_io_component_1;
    return {
        setters:[
            function (search_sort_io_component_1_1) {
                search_sort_io_component_1 = search_sort_io_component_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('phonecat.components.search', [])
                .component('searchSortIo', new search_sort_io_component_1.default()));
        }
    }
});
//# sourceMappingURL=search_sort_io.module.js.map