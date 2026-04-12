/* 
   làm bài tập if-else statement
   mảng(array, list)
   loop (for,while,do...while) 
*/
//
document.getElementById("btn").addEventListener("click", () => {
  let number = Number(document.getElementById("number").value);
  let result = document.getElementById("result");
  let binhPhuong = number * number;
  const result1 = `
  bình phương là: ${binhPhuong}
  `;
  result.innerText = result1;
});

//
const kiemTraChanLe = (a) => {
  //   let a = 20;
  if (a % 2 === 0) {
    console.log("Đúng");
  } else {
    console.log("sai");
  }
};
console.dir(kiemTraChanLe(7));

// kiểm tra xếp loại hs
const kiemTraXepLoai = (xepLoai) => {
  if (xepLoai >= 9.5) {
    console.log("Xuất sắc");
  } else if (xepLoai >= 8) {
    console.log("giỏi");
  } else if (xepLoai >= 6.5) {
    console.log("Khá");
  } else if (xepLoai >= 5) {
    console.log("Trung Bình");
  } else {
    console.log("Yếu");
  }
};
kiemTraXepLoai(10);
const tienTaxi = (soKm) => {
  if (soKm < 1) {
    console.log("số km phải lớn hơn 1");
    return ` số km phải lớn hơn 1`;
  }
  let tong = 0;
  if (soKm <= 1) {
    tong = soKm * 15000;
  } else if (soKm <= 5) {
    tong = 15000 + (5 - 1) * 12000;
  } else {
    tong = 15000 + 4 * 12000 + (soKm - 5) * 11000;
  }
  if (soKm > 30) {
    tong = tong * 0.9;
  }

  return `Quãng đường: ${soKm} Tổng tiền là: ${tong}`;
};
console.log(tienTaxi(0));
console.log(tienTaxi(15));
console.log(tienTaxi(30));
document.getElementById;

// các thứ trong tuần = switch-case
const cacThuTrongTuan = (thu) => {
  switch (thu) {
    case 1:
      console.log("ngày chủ nhật");
      break;
    case 2:
      console.log("ngày thứ 2");
      break;
    case 3:
      console.log("ngày thứ 4");
      break;
    case 4:
      console.log("ngày thứ 5");
      break;
    case 5:
      console.log("ngày thứ 6");
      break;
    case 6:
      console.log("ngày thứ 7");
      break;
    default:
      console.log("Không hợp lệ vui lòng nhập từ 1-7");
      break;
  }
};
cacThuTrongTuan(2);

// các mù trong năm
const cacMua = (mua) => {
  switch (mua) {
    case 1:
    case 2:
    case 3:
      console.log("Mùa xuân");
      break;
    case 4:
    case 5:
    case 6:
      console.log("Mùa hạ");
      break;
    case 7:
    case 8:
    case 9:
      console.log("Mùa thu");
      break;
    case 10:
    case 11:
    case 12:
      console.log("Mùa đông");
      break;
    default:
      console.log("bạn đã sai! Mời Bạn Nhập Lại.");
  }
};
cacMua(12);
