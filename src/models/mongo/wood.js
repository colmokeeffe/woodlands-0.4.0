import Mongoose from "mongoose";

const { Schema } = Mongoose;

const woodSchema = new Schema({
  title: String,
  description: String,
  latitude: Number,
  longitude: Number,
  categoryid: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

export const Wood = Mongoose.model("Wood", woodSchema);
