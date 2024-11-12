


function maxSubarraySum(arr, arrLen) {
    if (arrLen < 4) {
        console.log("Array must have at least 4 elements");
        return;
    }
    
   
    let sum = 0;
    for (let i = 0; i < 4; i++) {
        sum += a[i];
    }
    
    let maxSum = sum;

    
    for (let i = 1; i <= n - 4; i++) {
       
        sum = sum - a[i - 1] + a[i + 3];

        if(sum>maxSum)
        maxSum =sum;
    }

    console.log(maxSum);
}


const arr = [12, 3, 1, 9, 4, 12, 9, 7, 8, 12, 9, 4, 8, 8, 2, 3, 8];
const arrLen = arr.length;
maxSubarraySum(arr, arrLen);
