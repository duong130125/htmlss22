let a = +prompt("Nhập vào cạnh a tam giác:");
let b = +prompt("Nhập vào cạnh b tam giác:");
let c = +prompt("Nhập vào cạnh c tam giác:");

if(a+b>c && b+c>a && c+a>b){
    console.log("Ba cạnh vừa nhập có thể tạo ra được tam giác.");
}else{
    console.log("Ba cạnh vừa nhập vào không tạo được tam giác.")
}