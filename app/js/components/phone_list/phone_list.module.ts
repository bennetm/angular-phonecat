import PhoneListComponent from './phone_list_component';

export default angular.module('phonecat.components.phoneList', [])
    .component('phoneList', new PhoneListComponent())
    ;