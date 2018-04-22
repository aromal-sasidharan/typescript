

class Person{
    private fullName : string;


    constructor(public firtname:string, public lastname:string) {
        this.fullName = this.firtname + " " + this.lastname;
    }

    greet():string{
        return "Hello! " + this.fullName
    }
}


let user = new Person("Aromal","Sasidharan")
// document.body.innerHTML = user.greet(); // this code will be executed before page load in which there will be no body element"
// i.e., TypeError: document.body is null


// Now to load the code once page loads we can use "load" event and trigger a function
window.addEventListener('load', function () {
    document.body.innerHTML = user.greet();
});