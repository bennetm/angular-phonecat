import phoneFn from './phone.factory';

export default angular.module('phonecat.services', ['ngResource'])
    .factory('PhoneSvc', phoneFn);
