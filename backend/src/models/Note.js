// Import mongoose to define schemas and interact with MongoDB
import mongoose from "mongoose";

// Create a schema that defines the structure of a Note document
const noteSchema = new mongoose.Schema(
  {
    // Title field for the note
    title: {
      type: String,       // Must be a string
      required: true      // Field is mandatory
    },

    // Content/body of the note
    content: {
      type: String,       // Must be a string
      required: true      // Field is mandatory
    },
  },
  {
    timestamps: true     // Automatically adds createdAt and updatedAt fields
  }
);

// Create a Mongoose model based on the schema
const Note = mongoose.model("Note", noteSchema);

// Export the model so it can be used in controllers and routes
export default Note;
