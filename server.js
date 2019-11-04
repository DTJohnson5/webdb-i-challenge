const express = require("express");

const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

server.get("/api", (req, res) => {
  db("accounts")
    .then(accts => res.status(200).json(accounts))

    .catch(error =>
      res.status(500).json({
        Error: "Your attempt to retrieve the accounts have failed."
      })
    );
});

module.exports = server;
