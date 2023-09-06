function greet(name, myFunction) {
    console.log('Helloo world');
    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}
// callback function
function sayName(name) {
    console.log('Helloo2' + ' ' + name);
}
// calling the function after 2 seconds
setTimeout(greet, 5000, 'LJU', sayName);

