let moment = require('moment');

class Balance {
	constructor(value, date) {
		this.value = value;
		this.date = date;
	}

	future(date, interest) {
		throw Error('Invalid impl');
	}
}

class DailyBalance extends Balance {
	future(target, interest) {
		let days = target.diff(this.date, 'days');
		let dailyInterest = interest/365;

		let futureAmount = this.value;
		for(let i = 0; i < days; i++) {
			futureAmount = futureAmount + (futureAmount * dailyInterest / 100);
		}
		
		return futureAmount;
	}
}

class MonthlyBalance extends Balance {
	future(target, interest) {
		let months = target.diff(this.date, 'months');
		let monthlyInterest = interest/12;

		let futureAmount = this.value;
		for(let i = 0; i < months; i++) {
			futureAmount = futureAmount + (futureAmount * monthlyInterest / 100);
		}

		return futureAmount;
	}
}

console.log(new MonthlyBalance(1000, moment()).future(moment("2017-10-20"), 12));
console.log(new DailyBalance(1000, moment()).future(moment("2017-10-20"), 12));