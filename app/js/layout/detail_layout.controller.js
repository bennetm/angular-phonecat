System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DetailLayoutController;
    return {
        setters:[],
        execute: function() {
            DetailLayoutController = (function () {
                function DetailLayoutController($routeParams, PhoneSvc) {
                    this.phone = PhoneSvc.get({ phoneId: $routeParams.phoneId });
                    //this.mainImageUrl = this.phone.images[0];
                }
                DetailLayoutController.prototype.setImage = function (url) {
                    this.mainImageUrl = url;
                };
                return DetailLayoutController;
            }());
            DetailLayoutController.$inject = ['$routeParams', 'PhoneSvc'];
            exports_1("default",DetailLayoutController);
        }
    }
});
//# sourceMappingURL=detail_layout.controller.js.map