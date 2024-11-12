
function ElementFrequency(arr) {
    const fr = {};  
    arr.forEach(element => {
        fr[element] = (fr[element] || 0) + 1;
    });

   
    let a= arr.sort((a, b) => {
        const fr1 = fr[a];  
        const fr2 = fr[b];  

        
        if (fr1 !== fr2) {
            return fr2 - fr1;  
        }
        return arr.indexOf(a) - arr.indexOf(b);  
    });
    console.log(a);
}

const arr = [12, 3, 1, 9, 4, 12, 9, 7, 8, 12, 9, 4, 8, 8, 2, 3, 8];
const sortedArray = ElementFrequency(arr);

