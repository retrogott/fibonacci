var position = Number(prompt('Enter a number'));

if (position === 0) {
    document.write('Result: 0')
} else if (position === 1) {
    document.write('Result: 1')
} else {
    document.write('Result by cycle: ' + getFibonacciCycle(position) + '<br>');
    document.write('Result by recursion: ' + recursion(position - 1, 0, 1) );
}



function getFibonacciCycle(n) {
    var p1 = 0;
    var p2 = 1;
    var fibonacci;
    for (var i = 2; i <= n; i++) {
        fibonacci = p1 + p2;
        p1 = p2;
        p2 = fibonacci;
    }
    return fibonacci;
}

       
function recursion (num,f1,f2) {
    if (num === 0) {
        return f2;
    }
        return recursion(num-1, f2, f1 + f2);
        
}









