let a = +prompt("Nhập vào gía trị a:");
let b = +prompt("Nhập vào gía trị b:");
let c = +prompt("Nhập vào gía trị c:");
if(a==0){
    if(b==0){
            if(c==0)
                console.log("Phương trình có vô số nghiệm.");
            else
                console.log("Phương trình vô nghiệm.");
        }
    else
        console.log("Phương trình có nghiệm duy nhất là: " +(-c/b));
}else{
    let denta =b*b-4*a*c;
    if (denta<0)
        console.log("Phương trình vô nghiệm.");
    else if (denta==0)
        console.log("Phương trình có nghiệm kép là: " +(-b/(2*a)));
    else
        console.log("Phương trình có 2 nghiệm phân biệt là: x1 = "  +(-b+Math.sqrt(denta))/(2*a) + "; x2 = " + +(-b-Math.sqrt(denta))/(2*a));    
}    