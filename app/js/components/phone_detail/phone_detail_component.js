"use strict";
var phone_detail_controller_1 = require('./phone_detail_controller');
var PhoneDetailComponent = (function () {
    function PhoneDetailComponent() {
        this.bindings = {
            phone: '<',
        };
        this.templateUrl = './js/components/phone_detail/phone_detail.html';
        this.controller = phone_detail_controller_1.default;
    }
    return PhoneDetailComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PhoneDetailComponent;
//# sourceMappingURL=phone_detail_component.js.map