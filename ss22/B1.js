let a = +prompt("Nhập vào số a bắt kỳ:");
let b = +prompt("Nhập vào số b bắt kỳ:");
 
if(b%a==0){
    document.write(b + " Chia hết cho " + a );
}else{
    document.write(b + " Không chia hết cho " + a);
}