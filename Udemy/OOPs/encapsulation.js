/*Encapsulation means simply I want to restrict the direct access to the object data */

class BankAccount {
    #accBalance = 0; //# symbol before a variable in JavaScript is used to define private fields in a class intoduced in ECMAScript ES10 & private fields can be accessed inside the class

    deposit(amount) {
        this.#accBalance += amount
        return this.#accBalance;
    }
    getBalance() {
        return `Available Balance: ₹${this.#accBalance}`
    }
}

let account1 = new BankAccount();
account1.deposit(5000)
console.log(account1.getBalance())