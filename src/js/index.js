//get html

//login Btn
const loginBtn = document.querySelector(".login-btn");

//input email
const eMail = document.querySelector(".email");

//input password
const password = document.querySelector(".password");

//Users
//create User
class User {
    constructor(_email, _name, _password) {
        this.email = _email;
        this.name = _name;
        this.password = _password;
    }

    login() {
        console.log(`${this.name} has logged in.`);
    }

    logout() {
        console.log(`${this.name} has logged put`);
    }
}

let testUser = new User("testmail@mail.com", "TestUser", "123456");
console.log(testUser);

console.log(testUser.login());
console.log(testUser.logout());

// create and push new User to array

//
//create the modal for the newUser initialisaton
//newUser btn
const newUser = document.getElementById("new-user");

//modal
const modal = document.getElementById("modal");

//closeModal
const closeModal = document.getElementById("close-modal");

//registerBtn
const registerBtn = document.querySelector("#register-btn");

/*TODO: questions:
    difference between query.selector and getElementById => do both get the hole tag
    change class of an tag:
        --> available with both?
        .classlist.add("ID or query")?
        .classlist.remove("ID or query")?
*/

//show modal when click on newUser
newUser.addEventListener("click", () => {
    modal.classList.remove("hidden");
    /*     modal.classList.add("block"); */
    console.log("newUser was clicked");
});

//close modal if x is hitted
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    console.log("closeModal was clicked");
});

//close modal if hitted something diffrent then the modal
window.addEventListener("click", (clickOnPoint) => {
    if (clickOnPoint.target == modal) {
        modal.classList.add("hidden");
    }
});

registerBtn.addEventListener("click", () => console.log("registerBtn was clicked"));

//
// section bmi calc
// inputs of the calc

const calcAge = document.querySelector("#calc-age");
const calcWeight = document.querySelector("#calc-weight");
const calcHeight = document.querySelector("#calc-height");

// create-result btn

const createResult = document.querySelector("#create-result");

//changeable result

let calcresult = document.querySelector("#calc-result");

//check if User is already registrated and if the password is valid

loginBtn.addEventListener("click", () => {
    if (eMail.value === testUser.email && password.value === testUser.password) {
        console.log("login was clicked");
    }
});
