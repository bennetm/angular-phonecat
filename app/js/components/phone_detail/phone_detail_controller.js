System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PhoneDetailController;
    return {
        setters:[],
        execute: function() {
            PhoneDetailController = (function () {
                function PhoneDetailController() {
                    console.log(this.phone);
                }
                PhoneDetailController.prototype.onImageSelect = function (url) {
                    this.onImageChange({ newImgUrl: url });
                };
                return PhoneDetailController;
            }());
            exports_1("default", PhoneDetailController);
        }
    }
});
//# sourceMappingURL=phone_detail_controller.js.map