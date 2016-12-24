var employees = require('../employees');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var nameAndRole = employees.map((employee) => `${employee.firstName} ${employee.lastName}: ${employee.role.capitalize()}`);
console.log(nameAndRole);