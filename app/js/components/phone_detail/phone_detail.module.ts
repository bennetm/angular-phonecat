import PhoneDetailComponent from './phone_detail_component';

export default angular.module('phonecat.components.phoneDetail', ['ngAnimate'])
    .component('phoneDetails', new PhoneDetailComponent());