// Write a function called sum that finds the sum from 1 to a number
function sum(n){
    let ans = 0;
    for(let i=1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}

const ans = sum(10);
console.log(ans);
