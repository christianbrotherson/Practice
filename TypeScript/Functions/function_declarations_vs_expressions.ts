console.log(fullName('Christian', 'Brotherson'))
console.log(otherFullName('Christian', 'Brotherson'))
console.log(thirdFullName('Christian', 'Brotherson'))

// Function Declaration

function fullName(first : string, last : string) : string {
  return first + " " + last;
}

//Function Expression

var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
  return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
  return first + " " + last;
}

console.log(fullName('Christian', 'Brotherson'))
console.log(otherFullName('Christian', 'Brotherson'))
console.log(thirdFullName('Christian', 'Brotherson'))