const sinhVien = [
  { ten: "Nguyễn Thành Đạt", tuoi: 23, diem: 9 },
  { ten: "Trịnh Trung Hiếu", tuoi: 25, diem: 8 },
  { ten: "Nguyễn Phúc Hậu", tuoi: 29, diem: 5 },
  { ten: "Huỳnh Minh Thư", tuoi: 20, diem: 10 },
  { ten: "Nguyễn Trường Giang", tuoi: 25, diem: 6 },
  { ten: "Nguyễn Quang Huy", tuoi: 30, diem: 4 },
];

// forEach: duyệt qua từng phần tử của mảng
// viết tắt của thằng for...of
// khi nào dùng:
// - in ra thông tin của từng phần tử
// - tính toán , xữ lý dữ liệu của từng phần tử
// - render giao diện (tạo thẻ HTML) cho từng phần tử cho mảng

// TH1: in ra tên của từng sinh sinh
sinhVien.forEach((sv, index) => {
  console.log(`tên sinh viên thứ ${index + 1} là: ${sv.ten}`);
});

// TH2: tính điểm trung bình tất cả sinh viên
let dtb = 0;
sinhVien.forEach((sv) => {
  dtb += sv.diem;
});
dtb = dtb / sinhVien.length;
console.log(`điểm trung bình của sinh viên tất cả sv là: ${dtb}`);

// TH3: render giao diện cho từng sinh viên
// hiển thị danh sách sinh viên
let htmlContent = "";
sinhVien.forEach((sv) => {
  htmlContent += `<li>${sv.ten}-${sv.diem}</li>\n`;
});
console.log(htmlContent);
// forEach: không trả về mảng mới

// map(): duyệt qua từng phần tử của mảng
// kết quả trả về là 1 mảng mới
// dùng nhiều trong react để render giao diện
const newSinhVien = sinhVien.map((sv) => {
  let xepLoai = "";
  if (sv.diem > 8) {
    xepLoai = "Giỏi";
  } else if (sv.diem > 6.5) {
    xepLoai = "Khá";
  } else if (sv.diem > 5) {
    xepLoai = "Trung BÌnh";
  } else {
    xepLoai = "Yếu";
  }
  return {
    ...sv,
    xepLoai,
  };
});
console.dir(newSinhVien);

// filter(): duyệt qua từng phần tử của mảng
// để lọc ra những phần tử thỏa yêu cầu nào đó
// function bên trong filter() trả về true false
const filterSinhVienGioi = sinhVien.filter((sv) => sv.diem > 8);
console.log(filterSinhVienGioi);

// tạo mảng phim
const dsPhim = [
  { name: "Cú Đấm Sấm Sét", genra: "action", rating: 8.5 },
  { name: "Doremon", genra: "romance", rating: 6.5 },
  { name: "Connan", genra: "Action", rating: 9 },
  { name: "Cậu bé bút chì", genra: "Romance", rating: 10 },
  { name: "Cú Đấm Sấm Sét", genra: "Action", rating: 4 },
  { name: "Phép Thuật Win", genra: "love", rating: 6 },
];

// lọc rating > 8
const dsPhimRating8 = dsPhim.filter((p) => p.rating > 8);
console.log(dsPhimRating8);

// tìm tên phim bất kỳ
const key = "d";
const namePhim = dsPhim.filter((p) =>
  p.name.toLocaleLowerCase().includes(key.toLocaleLowerCase()),
);
console.dir(namePhim);
