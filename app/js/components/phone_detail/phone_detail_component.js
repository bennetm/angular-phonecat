System.register(['./phone_detail_controller'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var phone_detail_controller_1;
    var PhoneDetailComponent;
    return {
        setters:[
            function (phone_detail_controller_1_1) {
                phone_detail_controller_1 = phone_detail_controller_1_1;
            }],
        execute: function() {
            PhoneDetailComponent = (function () {
                function PhoneDetailComponent() {
                    this.bindings = {
                        phone: '<',
                        onImageChange: '&',
                        mainImageUrl: '<'
                    };
                    this.templateUrl = './js/components/phone_detail/phone_detail.html';
                    this.controller = phone_detail_controller_1.default;
                }
                return PhoneDetailComponent;
            }());
            exports_1("default", PhoneDetailComponent);
        }
    }
});
//# sourceMappingURL=phone_detail_component.js.map