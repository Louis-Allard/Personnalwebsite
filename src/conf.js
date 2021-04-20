require("dotenv").config();

module.exports = {
  portNumber: process.env.BACKEND_PORT || "42134",
  serverAddress: "http://127.0.0.1:8081/",
  mailtoAddress: "la.devweb@yahoo.com"
};