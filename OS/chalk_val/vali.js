import validator from "validator";
let email='test@gmail.com'
console.log(validator.isEmail(email))
let email1='test@'
console.log(validator.isEmail(email1))


let name='hello'
console.log(validator.isLowercase(name))
let name1='HELLO'
console.log(validator.isUppercase(name1))


