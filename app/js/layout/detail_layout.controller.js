"use strict";
var DetailLayoutController = (function () {
    function DetailLayoutController($routeParams, Phone) {
        this.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
            this.mainImageUrl = phone.images[0];
        });
    }
    DetailLayoutController.prototype.setImage = function (url) {
        this.mainImageUrl = url;
    };
    return DetailLayoutController;
}());
DetailLayoutController.$inject = ['$routeParams', 'PhoneSvc'];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DetailLayoutController;
//# sourceMappingURL=detail_layout.controller.js.map