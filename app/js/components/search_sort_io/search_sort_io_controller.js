"use strict";
var SearchController = (function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchController;
//# sourceMappingURL=search_sort_io_controller.js.map