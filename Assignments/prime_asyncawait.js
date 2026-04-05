console.log("Before");

function isPrime(num) {
    var i, flag = true;
    for(i=0;i<num/2;i++){
        if(num%i==0){
            flag = false;
            break;
        }
    }
    return flag;
}
async function checkPrime(num) {
    var num=5;
    var result = await isPrime(num);
    console.log(result);
}
checkPrime(5);
console.log("After");