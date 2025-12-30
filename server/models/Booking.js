const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: String,
  technician: String,
  category: String,
  timeSlot: String
});

module.exports = mongoose.model("Booking", bookingSchema);
