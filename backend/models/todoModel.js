const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false
    },
    active: {
      type: Boolean,
      required: true,
      default: false
    },
    uid: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      require: true,
    }
  },

);

module.exports = mongoose.model("Todos", todoSchema);
