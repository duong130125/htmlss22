let number = +prompt("Nhập vào một số bất kỳ:");

if(number >= 0){
    if(Math.sqrt(number) % 1 == 0){
        console.log("Số vừa nhập là số chính phương.");
    }else{
        console.log("Số vừa nhập không phải là số chính phương.");
    }
}else{
    console.log("Số vừa nhập là số âm không phải số chính phương.");
}