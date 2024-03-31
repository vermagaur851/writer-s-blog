import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: 'https://imgs.search.brave.com/PhW-ohlK_7foJn0MuAm-0_JYYX0DtjcnFXF5VkOCMrk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/MC8wNS8yMi8zNy9i/bGFuay1wcm9maWxl/LXBpY3R1cmUtOTcz/NDYwXzEyODAucG5n'
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User',userSchema)
export default User