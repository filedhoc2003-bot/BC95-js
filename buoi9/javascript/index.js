// lệnh xuất ra màn hình hoặc dev tool
console.log("Hello Word");
console.error("Báo Lỗi");
console.warn("Cảnh Báo");
console.info("Thông Tin");

console.log("hello");
// biến: chứa giá trị thay đổi đc và có thể tái sử dụng
// 3 cách khai báo biến: var (cơ chế hoisting),let,const
//let
// let tenBien = "giá trị của biến"
/**
 * quy tắt đặt tên biến con lạc đà viết thường tới viết hoa vd: nguyenThanhDat
 * giá trị biến chữ: ""
 * giá trị số: 123
 * giá trị boolean: true/false
 * các giá trị biến phổ biến: string, number, boolean
 */
let hoTen = "Nguyễn Thành Đạt";
let namSinh = 2003;
let isStudent = true;
let diaChi = "Long An";

//
//thử thay đổi giá trị bên trong biến
hoTen = "Huỳnh Minh Thư";
namSinh = 2004;
isStudent = false;

// const: constant: hằng số, không thể thay đổi giá trị sau khi đã gán
//
//không thể thể tái sử dụng
fullName = "Huỳnh Minh Thư 1";
const fullName = "Nguyễn Thành Đạt"; // lỗi không thể sử dụng lại
console.log(hoTen);
console.log(namSinh);
console.log(isStudent);
console.log(diaChi);
console.log(fullName);

// snippet:đoạn code mẫu được lưu giữ trong dev tool để sử dụng lại
// vd clg
