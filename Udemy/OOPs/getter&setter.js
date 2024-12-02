/*getters and setters are special methods that allow you to define how properties on an object are accessed or mutated. They provide a clean and controlled way to work with object properties, allowing you to add custom logic when retrieving or updating values. */

class Employee {
    #salary
    constructor(name, salary) {
        if (salary<0) {
            console.error("Salary can't be negative");
        }

        this.name = name;
        this.#salary = salary;
    }

    get salary() {
        return `Hey you can't access salary here`
    }
    set salary(value) {
        if (value<0) {
            console.error("Invalid Salary");            
        } else {
            this._salary = value
        }
    }

}
let emp1 = new Employee("Deadpool", 99000)
console.log(emp1.salary);