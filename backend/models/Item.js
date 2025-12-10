import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  age:{type: Number, required: true },
  mobile:{type: Number, required: true }

});

export default mongoose.model("Item", itemSchema);
