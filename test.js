//'use strict';

var count = 1;
var subCount = 1;


function mainCode() {
    console.log('Main code execution');

    count += 1;
    console.log('main count: ' + count);

    setTimeout(testSubFunction, 2000);


}

function testSubFunction() {
    subCount += 1;
    console.log('sub function execution');
    console.log('sub count: ' + subCount);
    performNext();
}

function performNext() {
    if (count >= 10) {
        console.log('Exit loop');
    }
    else {
        setTimeout(mainCode, 2000);
    }

}



console.log('code execution before main code loop');
mainCode();
console.log('code execution outside of function calls');