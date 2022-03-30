const express = require("express"),
    app = express(),
    controller = require("/home/ajalcantara/lab9/serve_html/controllers/controller.js");


app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});

app.get("/home", controller.sendReqParam);
app.get("/images/:imageNumber", controller.respondImage);

app.listen(app.get("port"), () => {
	console.log(`Server is running`)
});
