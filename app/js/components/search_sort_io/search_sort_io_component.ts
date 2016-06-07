import SearchController from "./search_sort_io_controller";

export default class SearchComponent implements ng.IComponentOptions {

    public bindings: any;
    public controller: any;
    public templateUrl: string;

    constructor() {
        this.bindings = {
            onSearchTermChange: '&',
            onSortOrderChange: '&',
            initialSortOrder : '<'
        };
        this.controller = SearchController;
        this.templateUrl = './js/components/search_sort_io/search_sort_io.html';
    }

}



