angular.module('momentx', ['angularMoment'])
    .directive('binTimeFormatter', ['moment', function (moment) {
        return {
            require: '?ngModel',
            link: function (scope, el, attrs, ngModel) {
                if(!ngModel || attrs.type != 'time' || !attrs.timeFormat) return;

                ngModel.$formatters.unshift(function(value) {
                    if (value.match(/^\d\d:\d\d:\d\d\.\d\d\d$/)) return moment(value, 'HH:mm:ss.sss').format(attrs.timeFormat);
                });
            }
        }
    }]);