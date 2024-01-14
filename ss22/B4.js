let year = +prompt("Nhập vào năm bất kỳ:");

if(year >= 0){
    if(year%4==0){
        console.log("Năm " +year+ " là năm nhuận.")
    }else{
        console.log("Năm " +year+ " không phải là năm nhuận.")
    }
}else{
    console.log("Năm bạn vừa nhập âm nên không hợp lệ.");
}