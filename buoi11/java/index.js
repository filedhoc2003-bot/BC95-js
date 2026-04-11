/**
 * sision 3
 * DOM
 * ES6(let, const)
 * + arrow function
 * +template string
 * if-else statement
 */

// Bìa 1: getElementById + innerText
// đối tượng để tương tác với HTML => document
let btn = document.getElementById("btn-result");
console.log("btn", btn);
console.dir(btn);

document.getElementById("btn-result").addEventListener("click", function () {
  // show dữ liệu thẻ p
  // Bước 1: Truy cập đến thẻ p trên HTML
  let text = document.getElementById("text-result");
  // Bước 2: gán giá trị vào trong thẻ p
  text.innerText = "Nội dung sau khi click";
});

// ES6: arrow function

//ES5:
function add(a, b) {
  return a + b;
}
const add1 = (a, b) => {
  return a + b;
};
// TH1: nếu chỉ có 1 dòng code => lượt bỏ dấu {}
const add2 = (a, b) => a + b;
// TH2: nếu chỉ có 1 tham số => bỏ dấu ()
const add3 = (a) => a * a;

//temlate string
// dấu nháy đơn
const result = `function ES5 nháy đơn: ${add(5, 6)}`;
console.log(result);

const result1 = `
đâscasc
ádascasc ${add1(5, 7)}
fasasc
áassafa ${add3(7)}
áafasfgbfnb ${add2(2, 5)}
`;
console.log(result1);

console.log("function ES5: ", add(5, 6));
console.log("function ES6: ", add1(5, 6));
console.log("function 1 line code ES6: ", add2(5, 6));
console.log("function 1 tham số ES6: ", add3(5));

let btn1 = document.getElementsByClassName("font-bold");
console.log("btn1: ", btn1);
