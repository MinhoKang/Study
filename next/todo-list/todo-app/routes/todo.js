const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const verifyToken = require("./auth");

const todos = [];

router.get("/todos", verifyToken, (req, res) => {
  res.json(todos);
});

router.post("/todo", verifyToken, (req, res) => {
  const todo = req.body.todo;
  todos.push(todo);
  res.status(200).send({
    message: "할일이 추가되었습니다.",
    data: {
      todos: todos,
    },
  });
});

router.put("/todo/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;

  if (todos[id]) {
    todos[id] = todo;
    res.status(200).send({
      message: "할일이 업데이트 되었습니다.",
      data: {
        todos: todos,
      },
    });
  } else {
    res.status(404).send("할일을 찾을 수 없습니다.");
  }
});

router.delete("/todo/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  if (todos[id]) {
    todos = todos.filter((_, index) => index != id);
    res.status(200).send({
      message: "할일이 삭제되었습니다.",
      data: {
        todos: todos,
      },
    });
  } else {
    res.status(404).send("할일을 찾을 수 없습니다.");
  }
});

module.exports = router;
