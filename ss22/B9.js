let month = +prompt("Nhập vào tháng trong năm:");
let year = +prompt("Nhập vào năm:");

if (month >= 1 && month <= 12 && year > 0) {
    const day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        day[2] = 29;
    }
    console.log(`Tháng ${month} năm ${year} có ${day[month]}`);
} else {
    console.log("Tháng hoặc năm không hợp lệ.");
}
