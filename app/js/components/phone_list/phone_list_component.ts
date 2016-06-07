
export default class PhoneListComponent implements ng.IComponentOptions {

    public bindings: any;
    public controller: any;
    public templateUrl: string;

    constructor() {
        this.bindings = {
            inputUnorderedList: '<',
            inputQuery: '<',
            inputSortOrder: '<'
        }
        this.templateUrl = './js/components/phone_list/phone_list.html';
    }

}