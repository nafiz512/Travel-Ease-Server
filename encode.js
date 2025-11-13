// encode.js

//// not refferable
const fs = require("fs");
const key = fs.readFileSync("./email-password-auth-TravelEase.json", "utf8");
const base64 = Buffer.from(key).toString("base64");
console.log(base64);

// user this for encode
//base64 -w 0 email-password-auth-TravelEase.json > encoded.txt
