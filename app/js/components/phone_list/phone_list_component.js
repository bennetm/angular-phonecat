System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PhoneListComponent;
    return {
        setters:[],
        execute: function() {
            PhoneListComponent = (function () {
                function PhoneListComponent() {
                    this.bindings = {
                        inputUnorderedList: '<',
                        inputQuery: '<',
                        inputSortOrder: '<'
                    };
                    this.templateUrl = './js/components/phone_list/phone_list.html';
                }
                return PhoneListComponent;
            }());
            exports_1("default", PhoneListComponent);
        }
    }
});
//# sourceMappingURL=phone_list_component.js.map