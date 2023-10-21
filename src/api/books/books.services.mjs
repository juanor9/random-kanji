import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const getAllBooks = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const libraryFilePath = path.join(__dirname, "./json/allBooks.json");
    const rawData = fs.readFileSync(libraryFilePath, "utf-8");
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Error al obtener todos los libros:", error);
    throw error;
  }
};

export const getBookById = async (id) => {
  const bookId = Number(id)
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const libraryFilePath = path.join(__dirname, "./json/allBooks.json");
    const rawData = fs.readFileSync(libraryFilePath, "utf-8");
    const { books } = JSON.parse(rawData);
    const book = books.find((item)=> item.id === bookId);
    if (!book){
      throw new Error(`No se ha encontrado el libro con ID ${bookId}`)
    }
    const { file } = book;
    const bookFilePath = path.join(__dirname, `./json/${file}`);
    const bookKanjiRawData = fs.readFileSync(bookFilePath, "utf-8");
    book.kanji = JSON.parse(bookKanjiRawData);;

    return book;
  } catch (error) {
    console.error("Error al obtener todos los libros:", error);
    throw error;
  }
};
