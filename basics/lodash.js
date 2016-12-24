var _ = require('lodash');

var abc = ['a', 'b', 'c', 'd', 'e', 'f'];
var abc123 = [1,5,'a','e',10,5,'d','a'];
var mixedfalse = ['a', false, '', 2, 0];
var _123 = [1,10,4,50,5,2,6,99,45,24,54]

console.log('chunk')
console.log( abc +' > ' + _.chunk(abc, 2) );
console.log( abc +' > ' +_.chunk(abc, 4) );

console.log('compact')
console.log( mixedfalse +' > ' +_.compact(mixedfalse) );

console.log('difference')
console.log( _.difference(abc, abc123) );

console.log('filter')
console.log( _.filter(_123, function(o) { return o%2 == 0 }) )

