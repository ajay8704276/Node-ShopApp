const http = require("http");
const body_parser = require("body-parser");
const express = require("express");
const adminRoutes = require("./routes/adminRoutes");
const shopRoutes = require("./routes/shopRoutes");

const app = express();

//Middleware function to parse url body
app.use(
  body_parser.urlencoded({
    extended: false,
  })
);

app.use(adminRoutes);
app.use(shopRoutes);

/* app.use((request, response, next) => {
  console.log("In another middleware ");
  response.send("Hello i am from middleware stack !!!");
}); */

app.listen(3000);

//const server = http.createServer(app);
//server.listen(4000);
