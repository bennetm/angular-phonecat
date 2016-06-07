"use strict";
var search_sort_io_controller_1 = require("./search_sort_io_controller");
var SearchComponent = (function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchComponent;
//# sourceMappingURL=search_sort_io_component.js.map