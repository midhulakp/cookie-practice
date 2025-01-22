import express from "express";
import cookieParser from "cookie-parser";
let app = express();
app.use(cookieParser());
app.get("/set-cookie", (req, res) => {
  res.cookie("name", "midhula", {
    maxAge: 5 * 60 * 1000, // on numerical => milliseconds
    httpOnly: true,
  });
  res.send("cookie set");
});

app.get("/get-cookie", (req, res) => {
  res.send(req.cookies);
});

app.get("/update-cookie", (req, res) => {
  res.cookie("name", "pranav", {
    maxAge: 1 * 60 * 1000,
    httpOnly: true,
  });
  res.send("cookie updated");
});

app.get("/delete-cookie", (req, res) => {
  res.clearCookie("name");
  res.send("Cookie deleted!");

  //   res.cookie("name", "", {
  //     maxAge: 5, // on numerical => milliseconds
  //   });
  //   res.send("cookie deleted");
});
export default app;
