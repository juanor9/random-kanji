import { parseStringPromise } from "xml2js";

export const getKanjiByCharacter = async (kanji) => {

  const xmlFilePath = "https://tanukilibros.com/xml/kanjidic2.xml";
  const response = await fetch(xmlFilePath);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const xmlData = await response.text();

  try {
    const jsonData = await parseStringPromise(xmlData);

    const characters = jsonData.kanjidic2.character || [];
    for (let character of characters) {
      if (character.literal && character.literal[0] === kanji) {
        return character;
      }
    }
    return null;
  } catch (error) {
    console.error("Error al parsear el XML:", error);
    throw error;
  }
};
