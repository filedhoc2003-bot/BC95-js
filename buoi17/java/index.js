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
  { name: "Cú Đấm Sấm Sét", genra: "action", rating: 10 },
  { name: "Doremon", genra: "romance", rating: 10 },
  { name: "Doremon1", genra: "romance", rating: 10 },
  { name: "Connan", genra: "Action", rating: 10 },
  { name: "Connan1", genra: "Action", rating: 10 },
  { name: "Cậu bé bút chì", genra: "Romance", rating: 10 },
  { name: "Cú Đấm Sấm Sét", genra: "Action", rating: 10 },
  { name: "Cú Đấm Sấm Sét 1", genra: "Action1", rating: 10 },
  { name: "Phép Thuật Win", genra: "love", rating: 10 },
  { name: "Phép Thuật Win 1", genra: "love1", rating: 10 },
];

// lọc rating > 8
const dsPhimRating8 = dsPhim.filter((p) => p.rating > 8);
console.log(dsPhimRating8);

// tìm tên phim bất kỳ
const key = "D";
const formatKey = key.toLocaleLowerCase();
const namePhim = dsPhim.filter((p) =>
  p.name.toLocaleLowerCase().includes(formatKey),
);
console.dir(namePhim);

// find(): tìm kết quả đầu tiên thỏa mản yêu cầu đó, trả về phần tử đó
// kết quả trả về là 1 đối tượng không phải mảng

const findPhim = dsPhim.find((p) => p.name === "Doremon");
console.dir(findPhim);
// Khi nào dùng:
// lấy thông tin chi tiết của 1 đối tượng theo tên, id , mã số nào đó

// findIndex(): tìm đầu tiên thỏa mản yêu cầu nào đó, trả về vị trí (index) của phần tử trong mảng
// trả về trừ 1 nếu không thấy phần tử nào thỏa mãn yêu cầu

const findIndexPhim = dsPhim.findIndex((p) => p.name === "Doremon"); // =>  nếu đúng thì trả vị trí trong mảng nếu ko thì trả -1
console.dir(findIndexPhim);

// vd trả về -1
const findIndexPhim1 = dsPhim.findIndex((p) => p.name === "Doremon3"); // Doremon3 không có trong mảng nên trả về -1
console.log(findIndexPhim1);

// some(): kiểm tra xem có phần tử nào thỏa mản yêu cầu đó không , trả về kiểu true false
// kết quả trả về là boolean

const isSomePhim = dsPhim.some((p) => p.genra === "Action"); // nếu trong tất cả các mảng có action thì trả về true khong thì trả về false
console.dir(isSomePhim);

// every(): kiểm tra tất cả xem có nào thỏa mản yêu cầu không, trả về kiểu true false
// kết quả trả về kiểu boolean
const isEveryPhim = dsPhim.every((p) => p.genra === "Action"); // trả về false vì tất cả không phải Action
console.dir(isEveryPhim);
// vd true
const isEveryPhim1 = dsPhim.every((p) => (p.rating = 10)); // trả về true vì tất cả rating đều bằng 10
console.dir(isEveryPhim1);
const number = [1, 2, 3, 4, 5];
// reduce(): dùng cho tính toán kết quả trả về là 1 giá trị duy nhất
const reduceNumber = number.reduce((n, sum) => sum + n, 0);
console.log("tổng là: ", reduceNumber);
