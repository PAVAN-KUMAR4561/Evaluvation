
function convertToYears(num) {

    let years = 0;
    let months = 0;
    let days = 0;



    years = Math.floor(num / 365);

    if (years % 4 === 0 && (years % 100 != 0 || years % 400 == 0)) {
        remaingdays = Math.floor(num % 365);
        remaingdays = remaingdays - 1;
    } else {
        remaingdays = Math.floor(num % 365);
    }
    

    let md = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    i = 0;
    while (remaingdays >= md[i]) {
        remaingdays = remaingdays - md[i];
        months++;
        i++;
        

    }

    days = remaingdays;

    console.log(`${num} TotalDays = ${years} Year, ${months} months,${days} Days`);

}
// 31 28 31 30 31 30 31 31 30 31 30 31
const numOfDays = 1627;
convertToYears(numOfDays)
