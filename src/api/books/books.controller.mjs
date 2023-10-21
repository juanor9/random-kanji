import { getAllBooks, getBookById } from "./books.services.mjs";

export async function handleGetAllBooks(req, res) {
  try {
    const books = await getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleBookById(req, res) {
  const { id } = req.params;
  try {
    const book = await getBookById(id);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json(error);
  }
}
