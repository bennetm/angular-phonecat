angular.module('phonecatComponents')
.directive('searchSortIo', function() {
    return {
        scope: {},
        controller: 'SearchSortIOCtrl',
        controllerAs: 'ctrl',
        templateUrl: './js/components/search_sort_io/search_sort_io.html',
        bindToController: {
            inputSearchTerm: '&',
            onSearchTermChange: '&',
            inputSortOrder: '&',
            onSortOrderChange: '&'
        }
    }

});