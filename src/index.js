import express from "express";
import userRouter from "./routes/users.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.get("/", (request, response) => {
  return response.json({
    message: "Hello World Kenzie",
  });
});

app.listen(3333);