const fname = ["Dodong", "Maria", "Diday", "Daday"];
const clickMe = function (firstname = null) {
    console.log(`Hello ${firstname}`);
}
module.exports = { fname, clickMe };