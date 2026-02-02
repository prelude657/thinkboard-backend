import Note from "../models/Note.js"; // Import the Note Mongoose model
import mongoose from "mongoose"; // Import mongoose (not strictly needed here)

// Controller to handle fetching all notes
// This runs when a GET request is made to /api/notes
export async function getAllNotes(_, res) { // GET /api/notes
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // Fetch all notes, newest first
    res.status(200).json(notes); // Send notes back with 200 OK
  } catch (error) {
    console.log("error in getAllNotes controller", error); // Log error for debugging
    res.status(500).json({ message: "internal server error" }); // Server error response
  }
}


export async function getANotebyId(req, res) { // GET /api/notes/:id
  try {
    const note = await Note.findById(req.params.id); // Find note by ID from URL params

    if (!note) { // If no note is found
      return res.status(404).json({ message: "Note not found" }); // Return 404
    }

    res.status(200).json(note); // Return the found note
  } catch (error) {
    console.log("error in getANotebyId controller", error); // Log any errors
    res.status(500).json({ message: "Internal server error" }); // Fallback error response
  }
}

// Controller to handle creating a new note
// This runs when a POST request is made to /api/notes
export async function createANote(req, res) { // POST /api/notes
  try {
    const { title, content } = req.body; // Destructure title and content from request body
    const note = new Note({ title, content }); // Create a new Note document

    const savedNote = await note.save(); // Save note to the database
    res.status(201).json(savedNote); // Return saved note with 201 Created
  } catch (error) {
    console.log("error in createNote controller", error); // Log error
    res.status(500).json({ message: "internal server error kurtis" }); // Error response
  }
}

export async function updateANote(req, res) { // PUT /api/notes/:id
  try {
    const { title, content } = req.body; // Get updated fields from request body

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id, // ID of the note to update
      { title, content }, // Fields to update
      { new: true } // Return the updated document instead of the old one
    );

    if (!updatedNote) { // If note does not exist
      return res.status(404).json({ message: "Note not found" }); // Send 404
    }

    res.status(200).json({
      message: "Note updated successfully", // Success message
      updatedNote, // Updated note data
    });
  } catch (error) {
    console.error("error in updateNote controller", error); // Log update error
    res.status(500).json({ message: "Internal server error" }); // Server error response
  }
}

export async function deleteANote(req, res) { // DELETE /api/notes/:id
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id); // Delete note by ID

    if (!deletedNote) { // If no note was deleted
      return res.status(404).json({ message: "Note not found" }); // Return 404
    }

    res.status(200).json({ message: "Note deleted successfully" }); // Confirm deletion
  } catch (error) {
    console.error("error in deleteNote controller", error); // Log delete error
    res.status(500).json({ message: "Internal server error" }); // Error response
  }
}
