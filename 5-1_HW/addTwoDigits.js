// You are given a two-digit integer n. Return the sum of its digits.

const  addTwoDigits = (n) =>{
    if(n < 10 || n > 99){
        return console.log(`retype n`);
    }
    else{
        let a = Math.floor(n/10)
        let b = n%10;
        sum = a + b 
    }
    return console.log(`The sum of its digits: ${sum} `);
}
addTwoDigits(22)


