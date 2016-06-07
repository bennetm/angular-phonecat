System.register(['./services/phone.module', './layout/list_layout.module', './layout/detail_layout.module', './components/search_sort_io/search_sort_io.module', './components/phone_list/phone_list.module', './components/phone_detail/phone_detail.module', './filters/checkmark.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var phone_module_1, list_layout_module_1, detail_layout_module_1, search_sort_io_module_1, phone_list_module_1, phone_detail_module_1, checkmark_module_1;
    var phonecatApp;
    function configure($routeProvider) {
        $routeProvider.
            when('/phones', {
            templateUrl: './js/layout/list_layout.html',
            controller: 'ListLayoutController',
            controllerAs: 'ctrl'
        }).
            when('/phones/:phoneId', {
            templateUrl: './js/layout/detail_layout.html',
            controller: 'DetailLayoutController',
            controllerAs: 'ctrl'
        }).
            otherwise({
            redirectTo: '/phones'
        });
    }
    return {
        setters:[
            function (phone_module_1_1) {
                phone_module_1 = phone_module_1_1;
            },
            function (list_layout_module_1_1) {
                list_layout_module_1 = list_layout_module_1_1;
            },
            function (detail_layout_module_1_1) {
                detail_layout_module_1 = detail_layout_module_1_1;
            },
            function (search_sort_io_module_1_1) {
                search_sort_io_module_1 = search_sort_io_module_1_1;
            },
            function (phone_list_module_1_1) {
                phone_list_module_1 = phone_list_module_1_1;
            },
            function (phone_detail_module_1_1) {
                phone_detail_module_1 = phone_detail_module_1_1;
            },
            function (checkmark_module_1_1) {
                checkmark_module_1 = checkmark_module_1_1;
            }],
        execute: function() {
            configure.$inject = ['$routeProvider'];
            phonecatApp = angular.module('phonecatApp', [
                'ngRoute',
                'phonecatAnimations',
                phone_module_1.default.name,
                list_layout_module_1.default.name,
                detail_layout_module_1.default.name,
                search_sort_io_module_1.default.name,
                phone_list_module_1.default.name,
                phone_detail_module_1.default.name,
                checkmark_module_1.default.name
            ])
                .config(configure);
            // Bootstrap the Angular 1.5 app
            angular.bootstrap(document.documentElement, ['phonecatApp']);
        }
    }
});
//# sourceMappingURL=app.module.js.map