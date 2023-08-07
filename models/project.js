const mongoose = require('mongoose');


// creating the project schema
const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    issues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue',
      },
    ],
    labels: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);


// setting up the name of the model

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;