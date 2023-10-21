import { getKanjiByCharacter } from "./kanji.services.mjs";
// import {
//   createBook,
//   getBooksFilter,
//   updateBook,
//   getBookById,
// } from "./book.services";

// export async function handleGetBooksByFilter(req: Request, res: Response) {
//   const filter = req.query;
//   if (!filter) {
//     return res.status(404).json({ message: "No filter provided" });
//   }

//   try {
//     const books = await getBooksFilter(filter);

//     return res.status(200).json(books);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// }

export async function handleGetKanjiByCharacter(req, res) {

  const { kanji } = req.params;
  if (!kanji) {
    return res.status(404).json({ message: "Kanji not found" });
  }

  try {
    const kanji = await getKanjiByCharacter(kanji);
    return res.status(200).json(kanji);
  } catch (error) {
    return res.status(500).json(error);
  }
}
