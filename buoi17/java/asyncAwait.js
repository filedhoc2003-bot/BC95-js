const API = "https://69f04f5b112e1b968e2582c5.mockapi.io/phone";

const getDataPhone = async () => {
  // try-catch: bắt lỗi khi chạy code trong try, nếu lỗi sẽ nhảy vào catch
  // C1: dùng .then() .catch()
  //   const response = await axios
  //     .get(API)
  //     .then((res) => {
  //       console.log("res", res.data);
  //     })
  //     .catch((err) => {
  //       console.log("err", err.response.data);
  //     })
  //     .finally(() => {
  //       // tắt loading spinner
  //     });
  //   return response;

  // C2: try-catch kết hợp với async-await
  try {
    const response = await axios.get(API);
    console.log("res", response);
    console.log("data", response.data);
    return response;
  } catch (err) {
    console.log("err", err.response.data);
  }
};
getDataPhone();
