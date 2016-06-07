
//phoneFn.$inject =  ['$resource'];

export default function phoneFn($resource: angular.resource.IResourceService)  {
        return $resource('phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: {phoneId: 'phones'},
                isArray: true
            }
        });
    };



