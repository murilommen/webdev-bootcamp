function isEven(num) {

    if (num % 2 === 0) {
        return true
    }
    else {
        return false
    }

}

function factorial(num) {

    if (num > 1) {
        let temp = 1;
        while (num > 1) { 
            temp= num * temp;
            num--;
        }
        return temp 
    }
    else {
        return 1;
    }

}


function kebabToSnake(str){
    return str.replace("-","_")
}
