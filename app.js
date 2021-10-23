const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/usersDB");

const app = express();


const userSchema = mongoose.Schema({
    email_addr: String,
    usr_password: String
});

const User = mongoose.model("User", userSchema);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function (req, res) {
    res.render("index");
});


app.get("/signin", function (req, res) {
    res.render("login");
});


app.get("/signup", function (req, res) {
    res.render("signup");
});


// app.get("/chatting_page", function (req, res) {
//     User.find({}, function (err, results) {
//         if (!err) {
//             res.render("chatting_page", {userdata: results});
//         }
//     });
// }); 


app.get("/:userName", function (req, res) {
    User.findOne({email_addr: req.params.userName}, function (err, docs) {
        if (!err) {
            if (docs) {
                User.find({}, function (err, results) {
                    if (!err) {
                        res.render("chatting_page.ejs", {usr_name: req.params.userName, userdata: results});
                    }  
                });
            } else {
                res.send("<h1>This account does not exist!</h1>");
            }
        }
    })
    
})


app.post("/", function (req, res) {
    const val = req.body.submit;
    if (val === "login") {
        res.redirect("/signin")
    } else if (val === "signup") {
        res.redirect("/signup");
    }
});


app.post("/signup", function (req, res) {
    email = req.body.email;
    password = req.body.password;
    confirmation_password = req.body.confirmation;
    User.findOne({email_addr: email}, function (err, docs) {
        if (!err) {
            if (docs != null) {
                res.redirect("/signup");
            } else {
                if (confirmation_password === password) {
                    const user = new User({email_addr: email, usr_password: password});
                    user.save();
                    res.redirect("/" + email); 
                } else {
                    res.redirect("/signin");
                }
            }
        };  
    });
});


app.post("/signin", function (req, res) {
    email = req.body.email;
    password = req.body.password;
    User.find({email_addr: email, usr_password: password}, function (err, docs) {
        if (err) {
            console.log(err);
        } else if (docs.length === 0) {
            res.redirect("/signin");
        } else {
            res.redirect("/" + email);
        }
    });
});


app.listen(3000, function (req, res) {
    console.log("Server started on port 3000");
});
