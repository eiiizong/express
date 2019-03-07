const express = require("express");
const favicon = require("serve-favicon");
const lessMiddleware = require("less-middleware");

const path = require("path");
const index = require("./routes/index.js");
const app = express();

// 配置

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 路由
app.use("/", index);
// 使用 favicon.ico
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
// 使用public下的less文件 html模板引用要写绝对路径 /css/index.html
app.use(lessMiddleware(path.join(__dirname, "public"), { debug: true }));
// 使用public下的静态文件
app.use(express.static(path.join(__dirname, "public")));

const port = 3002;
app.listen(port, () => {
  console.log(`this server is open at prot: ${port}`);
});
