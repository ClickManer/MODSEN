function foo() {
	var a = 10;
}

if (true) {
	var b = 10;
}

console.log(a); // ReferenceError
console.log(b); // 10
