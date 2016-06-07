//phoneFn.$inject =  ['$resource'];
"use strict";
function phoneFn($resource) {
    return $resource('phones/:phoneId.json', {}, {
        query: {
            method: 'GET',
            params: { phoneId: 'phones' },
            isArray: true
        }
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = phoneFn;
;
//# sourceMappingURL=phone.factory.js.map