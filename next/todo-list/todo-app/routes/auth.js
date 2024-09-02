const express = require("express");
const router = express.Router();

const users = {
  admin: "test1234!",
};

const SECRET_KEY = "zwon-fe";

const generateToken = (id) => {
  return jwt.sign({ id }, SECRET_KEY, { expiresIn: "1h" });
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer " 뒤의 토큰만 추출
  if (!token)
    return res.status(401).send({ message: "토큰이 전송되지 않았습니다." });

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send({ message: "유효하지 않은 토큰입니다." });
  }
};

// 회원가입 API
router.post("/signup", (req, res) => {
  const { id, password, passwordCheck, phoneNumber } = req.body;

  if (!id || !password || !passwordCheck || !phoneNumber) {
    return res.status(400).send({ message: "모든 입력값을 채워주세요." });
  }

  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(id)) {
    return res
      .status(400)
      .send({ message: "유효하지 않은 이메일 형식입니다." });
  }

  if (password !== passwordCheck) {
    return res.status(400).send({ message: "비밀번호가 일치하지 않습니다." });
  }

  if (users[id]) {
    return res.status(400).send({ message: "이미 존재하는 사용자입니다." });
  }

  users[id] = { password, phoneNumber };
  res.status(201).send({ message: "회원가입 성공" });
});

app.post("/login", (req, res) => {
  const { id, password } = req.body;
  if (users[id] && users[id] === password) {
    const token = generateToken(id);
    res
      .header("auth-token", token)
      .send({ status: 200, data: { accessToken: token } });
  } else {
    res.status(400).send("아이디 또는 비밀번호가 일치하지 않습니다.");
  }
});

module.exports = router;
module.exports = verifyToken;
