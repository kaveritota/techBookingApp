const express = require("express");
const Booking = require("../models/Booking");
const router = express.Router();

router.post("/", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json(booking);
});

router.get("/", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

router.delete("/:id", async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.json({ message: "Booking cancelled" });
});

module.exports = router;
