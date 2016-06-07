import phone from './services/phone.module';
import list_layout from './layout/list_layout.module';
import detail_layout from './layout/detail_layout.module';
import search_sort_io from './components/search_sort_io/search_sort_io.module';
import phone_list from './components/phone_list/phone_list.module';
import phone_detail from './components/phone_detail/phone_detail.module';
import checkmark from './filters/checkmark.module'


configure.$inject = [ '$routeProvider'];

function configure( $routeProvider: angular.route.IRouteProvider) {

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
    phone.name,
    list_layout.name,
    detail_layout.name,
    search_sort_io.name,
    phone_list.name,
    phone_detail.name,
    checkmark.name
])
    .config(configure);

// Bootstrap the Angular 1.5 app
angular.bootstrap(document.documentElement, ['phonecatApp']);


