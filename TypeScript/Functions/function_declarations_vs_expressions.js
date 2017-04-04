console.log(fullName('Christian', 'Brotherson'));
console.log(otherFullName('Christian', 'Brotherson'));
console.log(thirdFullName('Christian', 'Brotherson'));
// Function Declaration
function fullName(first, last) {
    return first + " " + last;
}
//Function Expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Christian', 'Brotherson'));
console.log(otherFullName('Christian', 'Brotherson'));
console.log(thirdFullName('Christian', 'Brotherson'));
//# sourceMappingURL=function_declarations_vs_expressions.js.map