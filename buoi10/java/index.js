console.log("hello word");

// 1. Toán Tử (+,-,*,/,%(lấy phần dư))
let num1 = 7;
let num2 = 8;

// +
// = => phép gán giá trị
// kết quả của tổng num1 + num2 cho 1 biến tạm sum
let sum = num1 + num2;

console.log("kết quả là: ", sum);

//
// +=
// sum += num1  === sum = sum + num1
sum += num1;
sum++; // tăng 1
++sum; // tăng 1
console.log(`kết quả là: ${sum}`);

// phép trừ
let num3 = 9;
let num4 = 5;
let minus = num3 - num4;
minus--; // giảm 1
--minus; // giảm 1
console.log(`kết quả là: ${minus}`);

// phép nhân
let num5 = 3;
let num6 = 6;
let multi = num5 * num6;
console.log(`kết quả là: ${multi}`);

// phép chia
let num7 = 8;
let num8 = 3;
let divive = num7 / num8;
console.log(`kết quả là: ${divive}`);

// phép chia lấy dư
let num9 = 8;
let num10 = 3;
let divive1 = num9 % num10;
console.log(`kết quả là: ${divive1}`);

// 2.Toán Tử So Sánh (>,<,>=,<=,!=,!==,==,===) => kết quả trả về là: true/false
// lưu ý: các phép toán so sánh sẽ đi kèm với if-else,toán tử 3 ngôi
// || , &&

let a = 8;
let b = 5;
let ss1 = a > b; //true
console.log(ss1);

// != => kiểm tra sơ sài
let c = 7;
let d = "7";
let ss2 = c != d; // false
console.log("có bằng không: ", ss2);
// !== => kiểm tra khắt khe
let e = 8;
let f = "8";
let ss3 = e !== f; // true
console.log("có bằng không: ", ss3);

// tương đương với == và === (kiểm tra lỏng lẻo và kiểm tra khắt khe)

// ==
let g = 9;
let h = "9";
let ss4 = g == h; // true
console.log(`có bằng không: ${ss4}`);

// ===
let j = 8;
let k = "8";
let ss5 = j === k; // false
console.log(`có bằng không: ${ss5}`);

// ! phủ định
let l = true; // trả về false
console.log(`!l là: ${!l}`);

// toán tử nối điều kiện
// $$
// (a > b) && (a > c)
// true && true => true
// true && false => false
// false && false => false
// chỉ cần có 1 false là false

// ||=> OR
// (a > b) || (a > c)
// true || true => true
// true || false => true
// false || true => true
// false || false => false
// chỉ cần 1 cái là true là true

// Bài 1: Tính lương nhân viên
// input
let salaryPerDay = 1000000;
let number0fWork = 22;

// process
let salary = salaryPerDay * number0fWork;

// output
// let salary
console.log(`số tiền làm được là: ${salary}đ`);

// Bài 2: tính điểm trung bình
let num11 = 2;
let num12 = 4;
let num13 = 3;
let num14 = 7;
let num15 = 6;
let dtb = Number((num11 + num12 + num13 + num14 + num15) / 5);
console.log(`điểm trung bình là: ${dtb}`);

// Bài 3: tính chu vi và diện tích hcn
let dai = 5;
let rong = 6;
let dienTich = dai * rong;
let chuVi = (dai + rong) * 2;
console.log(`diện tích là: ${dienTich}`);
console.log(`chu vi là: ${chuVi}`);
