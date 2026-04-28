// destructuring: cú pháp phân rã, giải nén , phân tách

// destructuring array
const array1 = [1, 2, 3, 4, 5];
// cách thông thường để lấy giá trị từ mảng
// const a = array[0]
// const b = array[1]
// const c = array[2]

// destructuring array
console.log("destructuring array");
const [num1, num2, num3, num4] = array1;
console.log(num1, num2, num3, num4);

// detsructuring object
const object1 = {
  name: "john",
  age: 20,
  city: "new york",
};
console.log("destructuring object");
// lấy age và city từ object1
const { age, city } = object1;
console.log(age, city);
