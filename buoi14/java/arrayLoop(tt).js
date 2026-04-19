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

// js buổi 3: bài tập

// in số từ 1 đến n n nhập từ pc
const printNumber = (n) => {
  // kiểm tra n phải lớn hơn 0 if ko lớn hơn ko báo lỗi
  if (n < 0 || isNaN(n)) {
    console.log("bạn đã nhập sai mời bạn nhập lại");
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
};
printNumber(15);
printNumber("mười lăm");
printNumber(-1);
// in số từ 0 đến 10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// in các số chẵn từ 1 đến n
const numberChan = (n) => {
  if (n < 0 || isNaN(n)) {
    console.log("bạn đã nhập sai mời bạn nhập lại");
    return;
  }

  for (let i = 0; i <= n; i += 2) {
    console.log(i);
  }
};
numberChan(20);
numberChan(-5);
numberChan("aaa");

// đếm có bao nhiêu số chắn và bao nhiêu số lẻ bằng n
const numberChanLe = (n) => {
  let chan = 0;
  let le = 0;
  if (n < 0 || isNaN(n)) {
    console.log("bạn đã nhập sai mời bạn nhập lại");
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      chan++;
    } else {
      le++;
    }
  }

  console.log(chan, le);
};
numberChanLe(35);

//
// loop qua mảng
const number1 = [1, 2, 3, 4, 5];
// đk bắt đầu vòng lặp: duyệt từ item đầu tiên của mảng thông qua index (chỉ số) -> let i = 0

// đk kết thúc vòng lặp:duyệt tới cuối mảng
// i < số lượng phần tử của mảng(number1.length)

// bước nhảy: tăng i lên 1 đơn vị -> i++
const printArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
printArray(number1);

// lấy số chẵn trong mảng
const evenPrintArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
};
console.log(`các số chẵn trong mảng là: `);
evenPrintArray(number1);

// tìm số lớn nhất trong mảng
const maxNumber = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(`số lớn nhất là: ${max}`);
};
maxNumber(number1);

// đảo ngược mảng
const daoMang = (arr) => {
  let mang = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    mang.push(arr[i]);
  }
  console.log(`đảo ngược mảng là: ${mang}`);
};
daoMang(number1);

// làm bài tập mảng các sinh viên
// danh sách sinh viên
const sinhVien = [
  { name: "Nguyễn Thành Đạt", age: 21, sex: "Nam", core: 9 },
  { name: "Huỳnh Minh Thư", age: 21, sex: "Nữ", core: 10 },
  { name: "Nguyễn Trường Giang", age: 22, sex: "Nam", core: 7 },
  { name: "Nguyễn Quang Huy", age: 21, sex: "Nam", core: 5 },
];
// in sv có điểm trung bình cao nhất
const findMaxSV = (sv) => {
  let topStudent = sv[0];
  for (let i = 1; i < sv.length; i++) {
    if (sv[i].core > topStudent.core) {
      topStudent = sv[i];
    }
    console.log(
      `sinh viên có điểm cao nhất là: ${topStudent.name} có số điểm cao nhất: ${topStudent.core.toFixed(1)}`,
    );
  }
};
findMaxSV(sinhVien);

// sắp sếp sinh viên có điểm từ cao đến thấp
const sortSV = (sv) => {
  const coppyMang = [...sv];
  coppyMang.sort((a, b) => b.core - a.core);
  console.log(`sinh viên có số điểm từ thấp đến cao là: `);
  console.dir(coppyMang);
};
sortSV(sinhVien);
// sortSV(sinhVien);

// 7. import, export

// 8. destructuring
