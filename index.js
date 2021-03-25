const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const generatePassword = require("password-generator");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "jhome/build")));
app.use(cors());
app.use(express.json());
app.use("/", router);

const contactEmail = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "jerryhomeowner@gmail.com",
    pass: "jHomeHandy21",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});
router.post("/api/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "jerryhomeowner@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
// Put all API endpoints under '/api'
// app.get("/api/passwords", (req, res) => {
//   const count = 5;

//   // Generate some passwords
//   const passwords = Array.from(Array(count).keys()).map((i) =>
//     generatePassword(12, false)
//   );

//   // Return them as json
//   res.json(passwords);

//   console.log(`Sent ${count} passwords`);
// });

// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/jhome/build/index.html"));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);
