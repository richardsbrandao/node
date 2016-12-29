function fib(num) {
	if(num == 0 || num == 1) {
		return 1;
	}
	//console.log(num)
	return fib(num-2) + fib(num-1);
}

console.log(fib(10))

function odd(num, qtd) {
	if(num%2 == 0) {
		qtd--;
	}

	if( qtd == 0 ) {
		return num;
	}

	return odd(++num, qtd);
}

console.log(odd(10, 5));