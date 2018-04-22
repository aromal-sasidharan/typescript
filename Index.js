"use strict";
var Person = /** @class */ (function () {
    function Person(firtname, lastname) {
        this.firtname = firtname;
        this.lastname = lastname;
        this.fullName = this.firtname + " " + this.lastname;
    }
    Person.prototype.greet = function () {
        return "Hello! " + this.fullName;
    };
    return Person;
}());
var user = new Person("Aromal", "Sasidharan");
// document.body.innerHTML = user.greet(); // this code will be executed before page load in which there will be no body element"
// i.e., TypeError: document.body is null
// Now to load the code once page loads we can use "load" event and trigger a function
window.addEventListener('load', function () {
    document.body.innerHTML = user.greet();
});
