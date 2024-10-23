/*Create a func named 'OrderTea' that takes one parameter, 'teaType'. Inside this func name another func named 'confirmOder' that returns a message like "Order Confirmed for a chai". Call 'confirmOder' within 'OrderTea' and return the result */

function OrderTea(teaType) {
    function confirmOder() {
        return `Order Confirmed for a ${teaType}`;
    }
    return confirmOder();
}

let orderConformation = OrderTea("chai")
console.log(orderConformation);
