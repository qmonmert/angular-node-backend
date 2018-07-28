import * as express from "express";
const app = express.Router();

export { app as routes };

app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

app.get("/users", (req, res) => {
  res.send([
    {
      username: "Quentin",
      password: "pass"
    }
  ]);
});

app.post("/users", (req, res) => {
  res.send({ body: req.body });
});
