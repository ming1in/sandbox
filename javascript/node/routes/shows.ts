import express from "express";
import axios from "axios";

const router = express.Router();

const url = "http://api.tvmaze.com/shows";

router.get("/", async (req, res) => {
  try {
    const { data } = await axios.get(url);

    res.json(data);
  } catch (e) {
    res.status(404).send();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (
      isNaN(id) ||
      parseFloat(id) !== parseInt(id, 10) ||
      parseFloat(id) < 0
    ) {
      res.status(400).send("Error: id is not a number");
    }

    const { data } = await axios.get(`${url}/${id}`);

    res.json(data);
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
