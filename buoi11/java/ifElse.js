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
  if (xepLoai >= 8) {
    console.log("giỏi");
  } else if (xepLoai >= 6.5) {
    console.log("Khá");
  } else if (xepLoai >= 5) {
    console.log("Trung Bình");
  } else {
    console.log("Yếu");
  }
};
kiemTraXepLoai(3);
