function sumNumbers(){
    let chislo = 0;
    for(let i=50; i<100; i=i+2){
        chislo= chislo+i;
    }
    return chislo;
}
module.exports = sumNumbers;