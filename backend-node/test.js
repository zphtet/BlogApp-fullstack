const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");

const token = jwt.sign({ id: "thisisid" }, "secret", {
  expiresIn: "7d",
});
console.log(token);

// bcrypt.hash("thisispassword", saltRounds, function (err, hash) {
//   // Store hash in your password DB.
//   console.log(hash);

//   bcrypt.compare("thisispasswod", hash, function (err, result) {
//     // result == false
//     console.log(result);
//   });
// });
