let number1 = +prompt("Nhập vào số thứ nhất:");
let number2 = +prompt("Nhập vào số thứ hai:");
let calculation = prompt("Nhập vào phép tính +; -; *; /:");
switch(calculation){
    case '+':
        console.log("kết quả phép tính: " +(number1+number2));
    break;
    case '-':
        console.log("kết quả phép tính: " +(number1-number2));
    break;
    case '*':
        console.log("kết quả phép tính: " +(number1*number2));
    break;
    case '/':
        console.log("kết quả phép tính: " +(number1/number2));
    break;    
    default:
        console.log("Phép tính bạn vừa nhập không hợp lệ.")
}