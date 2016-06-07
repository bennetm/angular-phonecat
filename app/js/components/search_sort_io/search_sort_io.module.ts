import SearchController from './search_sort_io_controller';
import SearchComponent from './search_sort_io_component';

export default angular.module('phonecat.components.search', [])
    .component('searchSortIo', new SearchComponent());

