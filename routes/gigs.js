const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

router.get("/", (req, res) => {
  Gig.findAll()
    .then(gigs => {
      res.render("gigs", {
        gigs
      });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/add", (req, res) => {
  res.render("add");
});

router.post("/add", (req, res) => {
  const data = {
    title: "Simple Wordpress developer",
    technologies: "Wordpress, javascript, HTML, CSS",
    budget: "$1000 US",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen",
    contact_email: "jeirsen@gmail.com"
  };

  let { title, technologies, budget, description, contact_email } = data;

  Gig.create({ title, technologies, budget, description, contact_email })
    .then(gig => res.redirect("/gigs"))
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
