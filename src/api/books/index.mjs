import { Router } from "express";
import { handleGetAllBooks, handleBookById } from "./books.controller.mjs";

const router = Router();

// GET api/books -- retrieve all books --
router.get("/", handleGetAllBooks);

// GET api/books/:id -- retrieve specific book by id --
router.get("/:id", handleBookById);

export default router;