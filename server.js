const express = require("express");

const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

server.get("/api", (req, res) => {
  db("accounts")
    .then(accounts => res.status(200).json(accounts))

    .catch(error =>
      res.status(500).json({
        Error: "Your attempt to retrieve the accounts have failed."
      })
    );
});

server.get("/api/:id", (req, res) => {
  const id = req.params.id;

  db("accounts")
    .where({id})
    .then(accts => res.status(200).json(accts))
    .catch(error =>
      res.status(500).json({
        Error: "Your attempt to retrieve that account has failed."
      })
    );
});



module.exports = server;
