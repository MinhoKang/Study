const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = 8000;
const SECRET_KEY = "zwon-fe";
let todoId = 0;

let todos = [];

app.use(cors());
app.use(express.json());

const users = [
  {
    id: "admin@admin.com",
    password: "test1234",
    phoneNumber: "01012345678",
  },
];

const generateToken = (id) => {
  return jwt.sign({ id }, SECRET_KEY, { expiresIn: "1h" });
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
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

app.get("/", (req, res) => {
  res.send(
    "<!DOCTYPE html><html><head><title>Todo App</title></head><body><h1>Hello Todo App</h1></body></html>"
  );
});

app.post("/signup", (req, res) => {
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

  if (users.find((user) => user.id === id)) {
    return res.status(400).send({ message: "이미 존재하는 사용자입니다." });
  }

  users.push({ id, password, phoneNumber });
  res.status(201).send({
    message: "회원가입 성공",
    data: {
      id,
      password,
    },
  });
});

app.post("/login", (req, res) => {
  const { id, password } = req.body;
  if (users.find((user) => user.id === id && user.password === password)) {
    const token = generateToken(id);
    res
      .header("auth-token", token)
      .send({ status: 200, data: { accessToken: token } });
  } else {
    res.status(400).send("아이디 또는 비밀번호가 일치하지 않습니다.");
  }
});

app.get("/todos/:id", verifyToken, (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send({ message: "할일을 찾을 수 없습니다." });
  }
});

app.get("/todos", verifyToken, (req, res) => {
  res.json(todos);
});

app.post("/todo", verifyToken, (req, res) => {
  const { todo, content = "" } = req.body; // content is optional

  if (typeof todo !== "string" || todo.trim() === "") {
    return res.status(400).send({ message: "유효한 todo를 입력해주세요." });
  }

  const newTodo = { id: todoId++, todo, content };
  todos.push(newTodo);

  res.status(200).send({
    message: "할일이 추가되었습니다.",
    data: { newTodo },
  });
});

app.put("/todo", verifyToken, (req, res) => {
  const id = parseInt(req.query.id);
  const { todo, content } = req.body;

  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).send({ message: "할일을 찾을 수 없습니다." });
  }

  if (!todo) {
    return res.status(400).send({ message: "수정할 내용을 입력해주세요." });
  }

  todos[index] = { id, todo, content: content || todos[index].content };
  res.status(200).send({
    message: "할일이 업데이트 되었습니다.",
    data: { todo: todos[index] },
  });
});

app.delete("/todo", verifyToken, (req, res) => {
  const id = parseInt(req.query.id);

  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    res.status(404).send({ message: "할일을 찾을 수 없습니다." });
  } else {
    todos.splice(index, 1);
    res.status(200).send({
      message: "할일이 삭제되었습니다.",
      data: { todos },
    });
  }
});

// 댓글 가져오기
app.get("/todo/:id/comments", verifyToken, (req, res) => {
  const { id } = req.params;
  const todo = todos.find((t) => t.id === parseInt(id));
  if (todo) {
    res.json(todo.comments ? todo.comments : []);
  } else {
    res.status(404).send("할일을 찾을 수 없습니다.");
  }
});

// 댓글 추가
app.post("/todo/:id/comment", verifyToken, (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).send("할일을 찾을 수 없습니다.");
  }

  if (!todo.comments) {
    todo.comments = [];
  }

  const newComment = {
    id: todo.comments.length,
    content,
  };

  todo.comments.push(newComment);

  res.status(201).send({
    message: "댓글이 추가되었습니다.",
    data: {
      todo,
    },
  });
});

// 댓글 수정
app.put("/todo/:todoId/comment/:commentId", verifyToken, (req, res) => {
  const { todoId, commentId } = req.params;
  const { content } = req.body;

  const todo = todos?.find((t) => t.id === parseInt(todoId));
  if (!todo) {
    return res.status(404).send("할일을 찾을 수 없습니다.");
  }

  const comment = todo.comments.find((c) => c.id === parseInt(commentId));
  if (!comment) {
    return res.status(404).send("댓글을 찾을 수 없습니다.");
  }

  comment.content = content;

  res.status(200).send({
    message: "댓글이 업데이트 되었습니다.",
    data: {
      todo,
    },
  });
});

// 댓글 삭제
app.delete("/todo/:todoId/comment/:commentId", verifyToken, (req, res) => {
  const { todoId, commentId } = req.params;

  const todo = todos.find((t) => t.id === parseInt(todoId));
  if (!todo) {
    return res.status(404).send("할일을 찾을 수 없습니다.");
  }

  const commentIndex = todo.comments.findIndex(
    (c) => c.id === parseInt(commentId)
  );
  if (commentIndex === -1) {
    return res.status(404).send("댓글을 찾을 수 없습니다.");
  }

  todo.comments.splice(commentIndex, 1);

  res.status(200).send({
    message: "댓글이 삭제되었습니다.",
    data: {
      todo,
    },
  });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
