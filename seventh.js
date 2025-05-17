let a = 5;

if (true) {
	a = 10;
}

function foo() {
	console.log(a); // 10
}

foo()
