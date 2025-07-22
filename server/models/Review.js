const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    learnerName: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
    todaysdate: {
      type: String, 
      required: true,
    },
  },
  {
    timestamps: true,versionKey: false,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
