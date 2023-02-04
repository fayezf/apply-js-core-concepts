function isEven(number){
    const remainder = number % 2;
    if(remainder == 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumberEven = isEven(303);
console.log(myNumberEven);
const herNumberEven = isEven(1280);
console.log(herNumberEven);