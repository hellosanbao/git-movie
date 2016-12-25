;
(function(angular) {
    angular.module('jsonpModel', [])
        .service('jsonpService', ['$window', '$document', function($window, $document) {
            this.jsonp = function(url, data, callback) {
                var querystr = url.indexOf('?') == -1 ? '?' : '&';
                for (var key in data) {
                    querystr += key + '=' + data[key] + '&'
                }
                var funcName = 'cb_func_' + Math.random().toString().replace('.', '');
                querystr += 'callback=' + funcName;
                var scriptElement = $document[0].createElement('script');
                scriptElement.src = url + querystr;
                $window[funcName]=function(data){
                	callback(data);
                	$document[0].body.removeChild(scriptElement);
                }
                $document[0].body.appendChild(scriptElement);
            }
        }])
})(angular)
