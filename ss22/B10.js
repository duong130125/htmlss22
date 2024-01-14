// Truthy là những giá trị mà khi chuyển về kiểu dữ liệu boolean ra giá trị true . 
// Falsy là những giá trị mà khi chuyển về kiểu dữ liệu boolean ra giá trị false . 
// Các giá trị được xem là truthy: chuỗi khác rỗng, số khác 0 và tất cả các object. Bao gồm cả [ ] và { } vì mảng rỗng và chuỗi rỗng vẫn là object.
// Các giá trị được xem là falsy: undefined, null, false, 0, -0, 0n, NaN, ‘’.

let giaTri = prompt("Nhập vào giá trị để kiểm tra:");
if (giaTri) {
    console.log(giaTri + " là giá trị truthy.");
} else {
    console.log(giaTri + " là giá trị falsy.");
}