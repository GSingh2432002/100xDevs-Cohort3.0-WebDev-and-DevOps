const express = require("express");

const jwt = require("jsonwebtoken");

// Generation of JWTs
const value1 = {
    name: "Gaurav",
    accountnumber: 123456789
}
const token = jwt.sign(value1,"secret");
console.log(token);

// Decoding of JWTs
const contents = {
    "name": "Gaurav",
    "accountnumber": 123456789,
    "iat": 1726417622,
};
const newToken = jwt.sign(contents, "hshshshshsh");
console.log(newToken);

// Verifying of JWTs
const value2 = {
    name: "Gaurav",
    accountnumber: 123456789
}
const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2F1cmF2IiwiYWNjb3VudG51bWJlciI6MTIzNDU2Nzg5LCJpYXQiOjE3MjY0MTY5NjF9.TB7Y7LYaH02XvHMoqdNTBd-0nICIbVDkL528TcOf1_8", "secret");
console.log(verifiedValue);
