import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be atleast 6 character"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
