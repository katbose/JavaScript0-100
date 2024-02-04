// this keyword refers to current context inside scope

const user = {
    username: "Bose",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "naveen"
user.welcomeMessage()
console.log(this);