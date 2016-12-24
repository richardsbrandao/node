function Person(name, age, account) {
	this.name = name;
	this.age = age;
	this.account = account
}

function Account(type, bank) {
	this.type = type;
	this.bank = bank;
	this.transactions = []
}

Account.prototype.add = function(transaction) {
	this.transactions.push(transaction)
}

Account.prototype.balance = function(date) {
	var balance = new Balance(date);
	for( var i in this.transactions ) {
		balance.add(this.transactions[i]);
	}
	return balance.getTotal();
}

function Transaction(type, date, value) {
	this.type = type;
	this.date = date;
	this.value = value;

	this.isAdd = function() {
		return this.type == TransactionType.ADD
	}; 

	this.isRemove = function() {
		return this.type == TransactionType.REMOVE
	} 
}

const TransactionType = {
	'ADD': 1,
	'REMOVE': 2
}

function Balance(date = new Date()) {
	var total = 0;
	this.date = date;

	var dateIsInScope = function(transactionDate) {
		return transactionDate < date; 
	};

	var sum = function(value) {
		total += value;
	};

	var subtract = function(value) {
		total -= value;
	};

	this.getTotal = function() {
		return total;
	}

	this.add = function(transaction) {
		if( dateIsInScope(transaction.date) ) {
			if(transaction.isAdd()) {
				sum(transaction.value);
			} else if(transaction.isRemove()) {
				subtract(transaction.value);
			}
		}
	};
}

account = new Account('Current', 'Itau');
person = new Person("Richard", 24, account);

transactionOne = new Transaction(TransactionType.ADD, new Date(2016, 8, 3, 0,0,0,0), 3000);
transactionTwo = new Transaction(TransactionType.REMOVE, new Date(2016, 8, 5, 0,0,0,0), 2000);

person.account.add(transactionOne);
person.account.add(transactionTwo);

console.log("Balance today: " + person.account.balance());
console.log("Balance 04/08: " + person.account.balance(new Date(2016, 8, 4, 0,0,0,0)));