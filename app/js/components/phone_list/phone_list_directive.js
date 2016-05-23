angular.module('phonecatDirectives').directive('search-sort-io', function() {
    return {
        scope: {},
        controller: 'PhoneListCtrl',
        controllerAs: 'ctrl',
        templateUrl: './js/components/phone_list/phone_list.html',
        bindToController: {
            inputUnorderedList: '=',
            inputQuery: '=',
            inputSortOrder: '='
        }
    }
});