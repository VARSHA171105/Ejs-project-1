// app.js

// 1. Import Express
const express = require("express");

// 2. Create Express application
const app = express();

// 3. Configure EJS as the template engine
app.set("view engine", "ejs");

// 4. Middleware to receive and parse form data
app.use(express.urlencoded({ extended: false }));

// 5. Route to display the HTML form
app.get("/", (req, res) => {

    res.render("home");

});

// 6. Route to receive form data
app.post("/evaluate", (req, res) => {

    // Receive values submitted by the client
    let name = req.body.name;

    // Convert the received marks into numbers
    let mark1 = Number(req.body.mark1);
    let mark2 = Number(req.body.mark2);
    let mark3 = Number(req.body.mark3);

    // Pass the data to the EJS template
    res.render("result", {
        name: name,
        mark1: mark1,
        mark2: mark2,
        mark3: mark3
    });

});
app.get("/students", (req, res) => {
//initializing students array  of students objects. 
    const students = [
        { regno: "MX101", name: "Arun", CGPA: 8.5 },
        { regno: "MX102", name: "Meena", CGPA: 9.2 },
        { regno: "MX103", name: "Ravi", CGPA: 7.8 }
    ];

res.render("students", { students }); //Passing students object array to students.ejs template 

});
app.get("/about", (req, res) => {
    res.render("about");
});

// 7. Start the server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});