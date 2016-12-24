var employees = require('../employees')

// Como nao tem, fiz um para testar
Array.prototype.reject = function(callback) {
	return this.filter((item) => !callback(item));
}

var under30 = (employee) => employee.age < 30

var employessUnder30 = employees.filter(under30)
var employessOver30 = employees.reject(under30)

console.log('-----------under 30-----------');
console.log(employessUnder30);
console.log('-----------over 30-----------');
console.log(employessOver30);

