System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ListLayoutController;
    return {
        setters:[],
        execute: function() {
            ListLayoutController = (function () {
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
            exports_1("default",ListLayoutController);
        }
    }
});
//# sourceMappingURL=list_layout.controller.js.map