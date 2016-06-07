System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SearchController;
    return {
        setters:[],
        execute: function() {
            SearchController = (function () {
                function SearchController() {
                    this.searchTerm = '';
                    this.sortOrder = this.initialSortOrder;
                }
                SearchController.prototype.onTermChange = function (queryString) {
                    this.onSearchTermChange({ newSearchTerm: queryString });
                };
                ;
                SearchController.prototype.onOrderChange = function (orderString) {
                    this.onSortOrderChange({ newSortOrder: orderString });
                };
                ;
                return SearchController;
            }());
            exports_1("default", SearchController);
        }
    }
});
//# sourceMappingURL=search_sort_io_controller.js.map