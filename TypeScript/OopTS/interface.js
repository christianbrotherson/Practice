// function profile(user: User) : string {
//   return `Welcome, ${user.firstName} ${user.lastName}`;
// }
function profile(user) {
    return "Welcome, " + user.email;
}
var realUser = {
    email: 'test@test.com'
};
console.log(profile(realUser));
// console.log(realUser.email); 
//# sourceMappingURL=interface.js.map