function isNumber(number){
	return !isNaN(parseFloat(number)) && isFinite(number);
}

function dateFromMysql(in_d){
	var t = in_d.split(/[- :]/);
	var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
	return d;
}

function checkDate(d){
	if(typeof d != 'string')
		return false;

	if(Object.prototype.toString.call(d) !== '[object Date]')
		return false;

	return !isNaN(d.getTime());
}

function removeArrayElement(array){
	var what, a = arguments, L = a.length, ax;
	while (L > 1 && array.length) {
		what = a[--L];
		while ((ax= array.indexOf(what)) !== -1) {
			array.splice(ax, 1);
		}
	}
	return array;
}

//year-month-day
new Date().setHours(0,0,0,0);

// Disable URL cache
+ '?_=' + new Date().getTime()

String.prototype.ucFirst = function()
{
	return this.charAt(0).toUpperCase()+this.slice(1);
}

Array.prototype.inArray = function(value)
{
	for (var i = 0, l = this.length; i < l; i++)
		if (this[i] == value)
			return true;
			
	return false;
}

function isInt(n) {
   return n % 1 === 0;
}

// If you don't know that the argument is a number-
function isInt(n) {
   return typeof n === 'number' && n % 1 == 0;
}

// If you also want to include examples such as 1E308 is a float, and not an integer:
function isInt(n) {
   return typeof n === 'number' && parseFloat(n) == parseInt(n, 10) && !isNaN(n);
} // 6 characters