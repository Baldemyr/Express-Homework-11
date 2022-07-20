//declare variables + required libraries 

let express = require("express");
let app = express();
let PORT = process.env.PORT || 3000;

// Connect to route folders

let apiRoutes = require("./routes/apiRoutes");
let htmlRoutes = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//set up to use insomnia to test 

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});