let a = +prompt("Nhập vào số a của phương trình:");
let b = +prompt("Nhập vào số b của phương trình:");

let x=-b/a;
if(a!=0){
    console.log("Phương trình có nghiệm là x = " +x);
}else{
    console.log("Phương trình vô nghiệm.");
}