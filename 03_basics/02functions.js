function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("Bose"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())
console.log(loginUserMessage(null))

console.log("**********");
console.log("           ");

function userLogin(username) {
    if (!username) {
        return "Please enter username"
    }
    return `${username} just logged in`
}
console.log(userLogin());
console.log(userLogin("sam"));
