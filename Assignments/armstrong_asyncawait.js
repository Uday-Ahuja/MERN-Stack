// wap to print if number is armstrong or not using async and await 
console.log("Before");

function isArmstrong(num) {
    var sum=0,temp=num,n;
    n=num.toString().length;
    while(temp>0){
        var rem=temp%10;
        sum+=Math.pow(rem,n);
        temp=parseInt(temp/10);
    }
    return sum==num;
}
async function checkArmstrong() {
    var num=153;
    var result = await isArmstrong(num);
    console.log(result);
}
checkArmstrong();
console.log("After");