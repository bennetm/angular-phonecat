import PhoneDetailController from './phone_detail_controller';

export default class PhoneDetailComponent implements ng.IComponentOptions {

    public bindings: any;
    public controller: any;
    public templateUrl: string;

    constructor() {
        this.bindings = {
            phone : '<',
            mainImageUrl : '<',
            onImageChange : '&'
        };
        this.templateUrl = './js/components/phone_detail/phone_detail.html';
        this.controller = PhoneDetailController;
    }

}