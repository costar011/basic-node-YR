// 바벨 없이 express호출 하는 법
// 변수(const)  express
const express = require("express");

// express를 app에 넣음
const app = express();

// 사용자가 "/" 호출 할 수 있게 만든다
// get(메뉴,작업);
// () => {} <-- 콜백함수
app.get("/", (req, res) => {
  res.send("하이");
});

// listen(주소가 어디?, 그리고 뭐할거임?);
app.listen(3000, () => {
  console.log("3000 이라는 주소에서 app실행 했다");
});
