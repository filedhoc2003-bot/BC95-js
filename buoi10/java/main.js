// Bìa 1: getElementById + innerText
// đối tượng để tương tác với HTML => document
let btn = document.getElementById("btn-result");
console.log("btn", btn);
document.getElementById("btn-result").addEventListener("click", function () {
  // show dữ liệu thẻ p
  // Bước 1: Truy cập đến thẻ p trên HTML
  let text = document.getElementById("text-result");
  // Bước 2: gán giá trị vào trong thẻ p
  text.innerText = "Nội dung sau khi click";
});
