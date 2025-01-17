const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
  },
    updatedAt: {
      type: Date,
      default: Date.now,
  },
  status: {
      type: String,
      enum: ['draft', 'published', 'archived'], // Example statuses, adjust as needed
      default: 'draft',
  },
  });

// We will create a new Collection

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;

