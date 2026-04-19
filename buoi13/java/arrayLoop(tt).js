let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fruit = ["đào", "cam", "bưởi", "táo", "xoài"];

// đếm số lượng phần tử của mảng
console.log(`số lượng phần tử của mảng là: ${number.length}`);
// lấy phần tử cuối cùng của mảng
// let lastNumber = number.length - 1; nếu có thì bỏ vô ngoặc thôi
console.log(`phần tử cuối cùng của mảng là: ${number[number.length - 1]}`);

// unshift() => [đầu mảng][1,2,3,4,5,6][cuối mảng] <= push()
// shifft()  => [đầu mảng][1,2,3,4,5,6][cuối mảng] =< pop()
// push(): thêm vào cuối mảng
//
number.push(8);
console.log("cách 1: phần tử được thêm vào cuối mẩng là: ", number);
console.log(`cách 2: phần tử được thêm vào cuối mảng là: ${number}`);
//
number.unshift(9);
console.log("cách 1: phần tử được thêm vào đầu mảng là: ", number);
console.log(`cách 2: phần tử được thêm vào đầu mảng là: ${number}`);
//
number.pop();
console.log("cách 1: phần tử cuối cùng bị xóa là: ", number);
console.log(`cách 2: phần tử cuối cùng bị xóa là: ${number}`);
//
number.shift();
console.log("cách 1phần tử đầu tiên bị xóa là: ", number);
console.log(`cách 2: phần tử đầu tiên bị xóa là: ${number}`);

// splice(): dùng để thêm, xóa, sửa
// splice(vị trí bắt đầu xóa, số lượng xóa, vị trí thêm)
// hàm này làm thay đổi mảng gốc
// XÓA
let food = ["mỳ", "hủ tiếu", "hủ tiếu mềm", "phở", "bún bò"];
food.splice(1, 1); // xóa hủ tiếu
console.log("cách 1: các món còn lại là: ", food);
console.log(`cách 2: các món còn lại là: ${food}`);
// kết quả trước ["mỳ","hủ tiếu mềm","phở","bún bò"]
food.splice(2, 1); //xóa phở
console.log("cách 1: các món còn lại là: ", food);
console.log(`cách 2: các món còn lại là: ${food}`);
// Th2: Xóa hết
food.splice(0);
console.log("cách 1: mảng trống vì đã xóa hết: ", food);
console.log(`cách 2: mảng trống vì đã xóa hết: ${food}`);

// THÊM
let food1 = ["mỳ", "hủ tiếu", "hủ tiếu mềm", "phở", "bún bò"];
food1.splice(1, 0, "mỳ cay"); // thêm mỳ cay ở vị trí 1
console.log("cách 1: mảng đã thêm là: ", food1);
console.log(`cách 2: mảng đã thêm là: ${food1}`);
// kết quả trước  ["mỳ cay", "mỳ", "hủ tiếu", "hủ tiếu mềm", "phở", "bún bò"]
food1.splice(3, 0, "bánh canh"); // thêm bánh canh trước hủ tiếu mềm
console.log("cách 1: thêm bánh canh vào vị trí 3: ", food1);
console.log(`cách 2: thêm bánh canh vào vị trí 3: ${food1}`);

// THAY THẾ-SỬA
let food2 = ["mỳ", "hủ tiếu", "hủ tiếu mềm", "phở", "bún bò"];
food2.splice(2, 1, "nuôi"); // thay thế hủ tiếu mềm bằng bánh canh
console.log("cách 1: thay mềm bằng bánh canh: ", food2);
console.log(`cách 2: thay mềm bằng bánh canh: ${food2}`);
// kết quả trước  ["mỳ", "hủ tiếu", "bánh canh", "phở", "bún bò"]
food2.splice(4, 1, "lẩu"); // thay bún bò bằng lẩu
console.log("cách 1: thay bún bò bằng lẩu: ", food2);
console.log(`cách 2: thay bún bò bằng lẩu: ${food2}`);

// ES6
// 1. arraw function: () => {}
// 2. let, const
// let: giá trị thay đổi được
// const: không thay đổi được
// 3. template string:`${variable hoặc function}`

// 4. default paramenter
const add1 = (number1 = 5, number2 = 7) => {
  return number1 + number2;
};

console.log(add1("default paramenter"));
console.log(add1(3, 5));
console.log(add1(7));
console.log(add1());

// 5. spread operator
// spread - trãi ra
// dùng trong:
// + copy mảng/object
// + nối mảng/merge object
// + truyền hàm vào
//Ý Nghĩa: giảm thiểu code thủ công: coppy mảng, nối mảng,truyền vào hàm
// TH1: copy1
let fruit1 = ["đào", "cam", "bưởi", "táo", "xoài"];
let food5 = ["mỳ", "hủ tiếu", "hủ tiếu mềm", "phở", "bún bò"];
// copy mảng đồ ăn vào cuối mảng trái cây
const copy = [...fruit1];
copy.push(food5);
console.log("cách 1: thêm mảng food vào cuối mảng fruit: ", copy);
console.log(`cách 2: thêm mảng food vào cuối mảng fruit: ${copy}`);
// TH2: cũng kiểu cách 1
const noiMang = [...fruit1, ...food5];
console.log("Mảng đã nối: ", noiMang);
console.log(`mảng đã nối: ${noiMang}`);

// 6. rest paramenter

// 7. import, export

// 8. destructuring
