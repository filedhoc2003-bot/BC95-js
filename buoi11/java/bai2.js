// B1: DOM tới cái nút đăng nhập và add event (function) đăng nhập
// TH hàm không có tham số thì phải có dấu   ()
document.getElementById("btn").addEventListener("click", () => {
  // B2: DOM tới các ô input và lấy giá trị
  // B2.1: DOM tới input userName
  let userName = document.getElementById("userName");
  console.dir(userName);
  console.log(`userName: ${console.dir(userName)}`);

  // B2.2: lấy value từ cái input userName
  let userNameValue = userName.value;
  // C2: gom dòng 6 và 11 thành 1 line code
  // let username = document.getElementById("userName").value;

  // làm tương tự cho password
  let password = document.getElementById("password").value;

  // xử lý password username
  // sau này: call API để kiểm tra
  // bây giờ: nhập đúng password và username
  // show username và cái password ra có thẻ p có id là result

  // tạo biến chứa code html và username và password
  let result = `
  <span class="block">${userNameValue}</span>
  <span class = "block">${password}</span>
  `;

  // DOM tới thẻ p id là result
  let pResult = document.getElementById("result");

  // gán result này vào thẻ p để hiện thị giao diện
  pResult.innerText = result;
});

// bài 3: tính diện tích và chu vi hình chữ nhật
document.getElementById("btn-ketqua").addEventListener("click", () => {
  let chieuDai = Number(document.getElementById("chieuDai").value);
  let chieuRong = Number(document.getElementById("chieuRong").value);
  let pResult1 = document.getElementById("result1");
  let dienTich = chieuDai * chieuRong;
  let chuVi = (chieuDai + chieuRong) * 2;
  let result1 = `
 diện tích HCN là: ${dienTich}
 chu vi HCN là: ${chuVi}
`;
  pResult1.innerText = result1;
});
// Bài 4: tính tổng ký số
document.getElementById("btn-ketqua1").addEventListener("click", () => {
  let kySo = Number(document.getElementById("kySo").value);
  let pResult2 = document.getElementById("result2");
  let soHangChuc = Math.floor(kySo / 10);
  let soHangDonVi = kySo % 10;
  let tong = soHangChuc + soHangDonVi;
  let result2 = `
  tổng là: ${tong}
  `;
  pResult2.innerText = result2;
});
