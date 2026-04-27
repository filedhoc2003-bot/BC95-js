// Bước 1: DOM tới các thẻ trên html
// dung object document để hạn chế tạo nhiều biến, đẹp
const el = {
  form: document.getElementById("formXetTuyen"),
  diemChuan: document.getElementById("diemChuan"),
  diemToan: document.getElementById("diemToan"),
  diemLy: document.getElementById("diemLy"),
  diemHoa: document.getElementById("diemHoa"),
  khuVuc: document.getElementById("khuVuc"),
  doiTuong: document.getElementById("doiTuong"),
  btnDtb: document.getElementById("btnDtb"),
  erroToan: document.getElementById("erroDiemToan"),
  erroLy: document.getElementById("erroDiemLy"),
  erroHoa: document.getElementById("erroDiemHoa"),
  erroDiemChuan: document.getElementById("erroDiemChuan"),
};

// tạo object lưu điểm ưu tiên khu vực và đối tượng
const DIEM_UU_TIEN_KHU_VUC = {
  1: 2,
  2: 1,
  3: 0.5,
};
const DIEM_UU_TIEN_DOI_TUONG = {
  A: 2.5,
  B: 1.5,
  C: 1,
};

// hàm ẩn lỗi
const hideError = (errElement) => {
  errElement.innerText = "";
  errElement.classList.add("hidden");
};

// hàm hiện lỗi
const showError = (errElement, message) => {
  errElement.innerText = message;
  errElement.classList.remove("hidden");
};

// viết hàm valition riêng cho code cho sạch hơn
const valitionInput = (diemChuan, diemToan, diemLy, diemHoa) => {
  // default is true
  let isValion = true;
  // delete all errol nếu có
  hideError(el.erroDiemChuan);
  hideError(el.erroToan);
  hideError(el.erroLy);
  hideError(el.erroHoa);

  // kiểm tra lỗi
  if (diemChuan < 0 || diemChuan > 30 || isNaN(diemChuan)) {
    showError(el.erroDiemChuan, "diểm chuẩn từ 0-30 điểm ");
    isValion = false;
  }

  // kiểm tra điểm từng môn
  // Toán
  if (diemToan < 0 || diemToan > 10 || isNaN(diemToan)) {
    showError(el.erroToan, "diểm chuẩn từ 0-10 điểm ");
    isValion = false;
  }
  // Lý
  if (diemLy < 0 || diemLy > 10 || isNaN(diemLy)) {
    showError(el.erroLy, "diểm chuẩn từ 0-10 điểm ");
    isValion = false;
  }
  //Hóa
  if (diemHoa < 0 || diemHoa > 10 || isNaN(diemHoa)) {
    showError(el.erroHoa, "diểm chuẩn từ 0-10 điểm ");
    isValion = false;
  }

  return isValion;
};

// Bước 2: tạo hàm xử lý sự kiện click button
el.form.addEventListener("submit", (event) => {
  // event này được lấy khi user click vào button có type là submit
  // Bước 3: lấy dữu liệu người dùng nhập vào
  //Quan Trọng: Khi dùng với thẻ form
  // thì dùng event.preventDefault() để ngăn form submit đi đâu cả
  event.preventDefault();
  const diemChuan = Number(el.diemChuan.value);
  const diemToan = Number(el.diemToan.value);
  const diemLy = Number(el.diemLy.value);
  const diemHoa = Number(el.diemHoa.value);
  const khuVuc = el.khuVuc.value;
  const doiTuong = el.doiTuong.value;

  // tính điểm ưu tiên
  const diemUuTienKhuVuc = DIEM_UU_TIEN_KHU_VUC[khuVuc];
  const diemUuTienDoiTuong = DIEM_UU_TIEN_DOI_TUONG[doiTuong];
  console.log(diemChuan);
  console.log(diemToan, diemLy, diemHoa);
  console.log(diemUuTienKhuVuc, diemUuTienDoiTuong);

  // valion dữ liệu người dùng nhập
  const isValion = valitionInput(diemChuan, diemToan, diemLy, diemHoa);
  if (!isValion) {
    return;
  }
  // validate dữ liệu người dùng nhập vào
  // Lưu Ý : code chạy được trước => clean code sau
  // if (isNaN(diemChuan) || isNaN(diemToan) || isNaN(diemLy) || isNaN(diemHoa)) {
  //   alert(`Vui lòng bạn nhập lại`);
  //   return;
  // }
  // // range điểm chuẩn và điểm từng môn phải từ 0-10
  // if (diemChuan < 0 || diemChuan > 30) {
  //   alert(`điểm chuẩn phải từ 0 đến 30`);
  //   return;
  // }

  // // điểm các môn phải từ 0 đến 10
  // if (diemToan < 0 || diemToan > 10) {
  //   alert(`điểm chuẩn phải từ 0 đến 10`);
  //   return;
  // }
  // if (diemLy < 0 || diemLy > 10) {
  //   alert(`điểm chuẩn phải từ 0 đến 10`);
  //   return;
  // }
  // if (diemHoa < 0 || diemHoa > 10) {
  //   alert(`điểm chuẩn phải từ 0 đến 10`);
  //   return;
  // }

  // Bước 5: tính tổng điểm
  const tongDiem =
    diemToan + diemLy + diemHoa + diemUuTienKhuVuc + diemUuTienDoiTuong;

  // Bước 6: so sánh điểm với điểm chuẩn và hiển thị kết quả
  if (tongDiem >= diemChuan) {
    alert(`Bạn đã đậu! Tổng điểm của bạn: ${tongDiem}`);
  } else {
    alert(`Bạn đã rớt! Tổng điểm của bạn là: ${tongDiem}`);
  }
});
