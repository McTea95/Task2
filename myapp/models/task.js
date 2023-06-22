const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  creationDate: { type: Date, default: Date.now },
  dueDate: { type: Date, required: false },
  status: { type: String, default: 'offen', enum: ['offen', 'in Bearbeitung', 'erledigt'] }
});



taskSchema.virtual("url").get(function () {
    return `/task/${this._id}`;
  });

  module.exports = mongoose.model("Task", taskSchema);
