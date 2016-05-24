angular.module('phonecatComponents').directive('phoneList', function() {
    return {
        scope: {},
        controller: 'PhoneListController',
        controllerAs: 'ctrl',
        templateUrl: './js/components/phone_list/phone_list.html',
        bindToController: {
            inputUnorderedList: '=',
            inputQuery: '=',
            inputSortOrder: '='
        }
    }
});