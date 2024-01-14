let number = prompt("Nhập một số có 4 chữ số:");

if (number.length !== 4 || isNaN(number)) {
    console.log("Số bạn vừa nhập không phải 4 chữ số.");
} else {
    let hangNghin = Math.floor(number / 1000);
    let hangChuc = Math.floor((number % 1000) / 100);
    let hangTram = Math.floor((number % 100) / 10);
    let donVi = number % 10;

    console.log("Chữ số hàng nghìn: " + hangNghin);
    console.log("Chữ số hàng chục: " + hangChuc);
    console.log("Chữ số hàng trăm: " + hangTram);
    console.log("Chữ số đơn vị: " + donVi);
}