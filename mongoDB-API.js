const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongoUsersDB");

const app = express();


const userSchema = mongoose.Schema({
    email_addr: String,
    usr_password: String
});

const User = mongoose.model("User", userSchema);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


app.post("/signup", function (req, res) {
    email = req.body.email;
    password = req.body.password;
    User.findOne({email_addr: email}).then((err, docs) => {
        if (!err) {
            if (docs != null) {
                res.redirect("/signup");
            } else {
                const user = new User({email_addr: email, usr_password: password});
                user.save();
                res.status(200).send("Successfully added");
            }
        };  
    });
});


app.listen(3000, function (req, res) {
    console.log("Server started on port 3000");
});
