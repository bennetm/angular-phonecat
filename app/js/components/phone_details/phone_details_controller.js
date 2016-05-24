angular.module('phonecatComponents')
    .controller('PhoneDetailsController', function ($scope) {
            var ctrl = this;

        ctrl.onImgSelect = function(url) {
            ctrl.onImageChange({newImgUrl: url});
        }
        }
    );