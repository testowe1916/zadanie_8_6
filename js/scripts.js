var a = prompt('Enter a'),
	b = prompt('Enter b'),
    value = (a * b) - (2 * a * b) + (b * b);
console.log(value);
alert(value);
if (value > 0) {
	console.log('Liczba dodatnia');
	alert('dodatnia')
}
else if (value < 0) {
	console.log('Liczba ujemna');
	alert('minus')
}
else if (value == 0) {
	console.log('Liczba równa się 0');
	alert('0')
};

