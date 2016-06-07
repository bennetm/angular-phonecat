"use strict";
var phone_module_1 = require('./services/phone.module');
var list_layout_module_1 = require('./layout/list_layout.module');
var detail_layout_module_1 = require('./layout/detail_layout.module');
var search_sort_io_module_1 = require('./components/search_sort_io/search_sort_io.module');
var phone_list_module_1 = require('./components/phone_list/phone_list.module');
var phone_detail_module_1 = require('./components/phone_detail/phone_detail.module');
var checkmark_module_1 = require('./filters/checkmark.module');
//import { UpgradeAdapter } from '@angular/upgrade';
configure.$inject = ['$routeProvider'];
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
var phonecatApp = angular.module('phonecatApp', [
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
//const upgradeAdapter = new UpgradeAdapter();
//upgradeAdapter.bootstrap(document.body, ['phonecatApp'], {strictDi: true});
//# sourceMappingURL=app.module.js.map