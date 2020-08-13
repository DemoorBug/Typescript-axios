var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello' + person.firstName + ' ' + person.lastName;
}
// let user = {
//   firstName: 'hello',
//   lastName: 'bug'
// }
var user = new User('Hello', 'bug');
console.log(greeter(user));
