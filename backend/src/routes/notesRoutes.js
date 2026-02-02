import express from "express";
import {
  getAllNotes,
  getANotebyId,
  createANote,
  updateANote,
  deleteANote
} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);          // GET /api/notes
router.get("/:id", getANotebyId);      // GET /api/notes/:id
router.post("/", createANote);         // POST /api/notes
router.put("/:id", updateANote);       // PUT /api/notes/:id
router.delete("/:id", deleteANote);    // DELETE /api/notes/:id

export default router;
