System.register(["./search_sort_io_controller"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var search_sort_io_controller_1;
    var SearchComponent;
    return {
        setters:[
            function (search_sort_io_controller_1_1) {
                search_sort_io_controller_1 = search_sort_io_controller_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent() {
                    this.bindings = {
                        onSearchTermChange: '&',
                        onSortOrderChange: '&',
                        initialSortOrder: '<'
                    };
                    this.controller = search_sort_io_controller_1.default;
                    this.templateUrl = './js/components/search_sort_io/search_sort_io.html';
                }
                return SearchComponent;
            }());
            exports_1("default", SearchComponent);
        }
    }
});
//# sourceMappingURL=search_sort_io_component.js.map