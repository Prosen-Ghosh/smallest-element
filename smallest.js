const smallest = (function(){
    'use strict';
    const fn = function(arr){
        if(Object.prototype.toString.call(arr).toLowerCase() !== '[object array]'){
            return new TypeError('smallest() expects an array parameter');
        }
        return arr.length === 0 ? null : arr.reduce((pre,cur) => {
            if(typeof cur === 'number'){
                if(cur < pre)return pre = cur;
            }
            return pre;
        },Number.MAX_SAFE_INTEGER);
    }
    return fn;
})();

if (typeof module === 'object' && module.exports) {
    module.exports = smallest;
}