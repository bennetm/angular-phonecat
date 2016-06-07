"use strict";
var ListLayoutController = (function () {
    function ListLayoutController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'name';
        this.query = '';
    }
    ListLayoutController.prototype.onNewSearchTerm = function (newSearchTerm) {
        this.query = newSearchTerm;
    };
    ;
    ListLayoutController.prototype.onNewSortOrder = function (newSortOrder) {
        this.orderProp = newSortOrder;
    };
    ;
    return ListLayoutController;
}());
ListLayoutController.$inject = ['PhoneSvc'];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListLayoutController;
//# sourceMappingURL=list_layout.controller.js.map