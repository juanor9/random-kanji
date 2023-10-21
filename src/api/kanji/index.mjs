import { Router } from "express";
import { handleGetKanjiByCharacter } from "./kanji.controller.mjs";

const router = Router();

// GET api/books/:kanji -- retrieve a specific book --
router.get("/:kanji", handleGetKanjiByCharacter);

export default router;
