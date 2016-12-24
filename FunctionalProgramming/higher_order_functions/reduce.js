var employees = require('../employees');

var total = employees.reduce(((value, employee) => employee.salary + value), 0)
console.log(`Total salary R$ ${total} / Média: R$ ${total/employees.length} / Total: ${employees.length}`);
console.log('----------------');

function groupSalaryByRole(employeesGroupped, employee) {
	employeesGroupped[employee.role] = employeesGroupped[employee.role] || {total: 0, count: 0};
	employeesGroupped[employee.role] = { total: employee.salary + employeesGroupped[employee.role].total, count: employeesGroupped[employee.role].count+1};
	return employeesGroupped;
}

var salaryByRole = employees.reduce(groupSalaryByRole, {});

console.log(salaryByRole);
console.log('----------------');

var averageSalaryByRole = Object.keys(salaryByRole)
		.reduce((average, role) => {
			average[role] = salaryByRole[role].total / salaryByRole[role].count
			return average;
		}, {});


console.log(averageSalaryByRole)