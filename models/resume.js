const mongoose = require("mongoose");

// Create resume scheme
/*
TODO: Add remaining resume properties
*/
const resumeSchema = new mongoose.Schema(
    {
        candidateId: { type: String, required: true },
        workHistory: { type: Array },
    },
    { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Resume", resumeSchema);
