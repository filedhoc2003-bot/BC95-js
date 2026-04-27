const el = {
  form: document.getElementById("formHoaDon"),
  maKH: document.getElementById("maKH"),
  loaiKH: document.getElementById("loaiKH"),
  wrapKetNoi: document.getElementById("wrapKetNoi"),
  soKetNoi: document.getElementById("soKetNoi"),
  soKenhCaoCap: document.getElementById("soKenhCaoCap"),
  ketQua: document.getElementById("resultHoaDon"),

  // erroElement
  erroMaKH: document.getElementById("erroMaKH"),
  erroLoaiKH: document.getElementById("erroLoaiKH"),
  erroSoKetNoi: document.getElementById("erroSoKetNoi"),
  erroSoKenhCaoCap: document.getElementById("erroSoKenhCaoCap"),
};

// tạo object lưu giá trị dữ liệu khách hàng
const BANG_GIA = {
  nhaDan: {
    phiXuLy: 4.5,
    phiDichVu: 15,
    phiKenhCaoCap: 7.5,
  },
  doanhNghiep: {
    phiXuLy: 15,
    phiDichVu10Dau: 75, // 10 kết nối đầu tiên
    phiKetNoiThem: 5, // trên 10 cái thì mỗi cái thêm 5$
    phiKenhCaoCap: 50,
  },
};

// hidden/show input số kết nối
el.loaiKH.addEventListener("change", () => {
  const loai = el.loaiKH.value;
  if (loai === "nhaDan") {
    el.wrapKetNoi.classList.add("hidden");
  } else {
    el.wrapKetNoi.classList.remove("hidden");
  }
});

// tạo hàm ẩn lỗi
const hideErro = (err) => {
  err.innerText = "";
  err.classList.add("hidden");
};

// hàm hiển thị lỗi
const showErro = (err, message) => {
  err.innerText = message;
  err.classList.remove("hidden");
};

const valitionInput = (maKH, loaiKH, soKetNoi, soKenhCaoCap) => {
  let isValid = true;

  // reset lỗi
  hideErro(el.erroMaKH);
  hideErro(el.erroLoaiKH);
  hideErro(el.erroSoKetNoi);
  hideErro(el.erroSoKenhCaoCap);

  return isValid;
};

// hóa đơn nhà dân
const hoaDonNhaDan = (soKenhCaoCap) => {
  const giaNhaDan = BANG_GIA.nhaDan;
  const tongTienNhaDan =
    giaNhaDan.phiXuLy +
    giaNhaDan.phiDichVu +
    soKenhCaoCap * giaNhaDan.phiKenhCaoCap;
  return tongTienNhaDan;
};

// hóa đơn doanh nghiệp
const hoaDonDoanhNghiep = (soKetNoi, soKenhCaoCap) => {
  const giaDoanhNghiep = BANG_GIA.doanhNghiep;
  let phiDichVu = giaDoanhNghiep.phiDichVu10Dau;
  if (soKetNoi > 10) {
    const soKetNoiThem = soKetNoi - 10;
    phiDichVu =
      giaDoanhNghiep.phiDichVu10Dau +
      soKetNoiThem * giaDoanhNghiep.phiKetNoiThem;
  }
  const tongTienDoanhNghiep =
    giaDoanhNghiep.phiXuLy +
    phiDichVu +
    soKenhCaoCap * giaDoanhNghiep.phiKenhCaoCap;
  return tongTienDoanhNghiep;
};

el.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const maKH = el.maKH.value;
  const loaiKH = el.loaiKH.value;
  const soKetNoi = Number(el.soKetNoi.value) || 0;
  const soKenhCaoCap = Number(el.soKenhCaoCap.value) || 0;

  const isValid = valitionInput(maKH, loaiKH, soKetNoi, soKenhCaoCap);
  if (!isValid) {
    return;
  }

  // tính hóa đơn hiển thị kết quả
  let tongTien = 0;

  if (loaiKH === "nhaDan") {
    tongTien = hoaDonNhaDan(soKenhCaoCap);
  } else if (loaiKH === "doanhNghiep") {
    tongTien = hoaDonDoanhNghiep(soKetNoi, soKenhCaoCap);
  }

  // hiển thị
  el.ketQua.innerText = `Mã KH: ${maKH} - Tiền cáp: ${tongTien}`;
  el.ketQua.classList.remove("hidden");
});
