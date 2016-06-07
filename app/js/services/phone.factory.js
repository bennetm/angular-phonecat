//phoneFn.$inject =  ['$resource'];
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function phoneFn($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: { phoneId: 'phones' },
                isArray: true
            }
        });
    }
    exports_1("default", phoneFn);
    return {
        setters:[],
        execute: function() {
            ;
        }
    }
});
//# sourceMappingURL=phone.factory.js.map