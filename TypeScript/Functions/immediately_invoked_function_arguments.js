// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Christian', 'Brotherson'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Courtney', 'Brotherson');
//# sourceMappingURL=immediately_invoked_function_arguments.js.map