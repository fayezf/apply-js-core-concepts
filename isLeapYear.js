function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const isMyYear = isLeapYear(1933);
console.log('my year', isMyYear);

const isHerYear = isLeapYear(1960);
console.log('her year', isHerYear);